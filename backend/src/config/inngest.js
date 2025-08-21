import { Inngest } from "inngest";
import { connectDB } from "./db.js";
import { User } from "../models/user.model.js";

export const inngest = new Inngest({
  id: "zync",
});

const syncUser = inngest.createFunction(
    {id: "sync-user"},
    {event: "clerk/user.created"},
    async({event}) => {
        await connectDB();
        const {id, email_addresses, first_name, last_name} = event.data.object;
        const user = await User.findOne({clerkId: id});
        if(!user){
            const newUser = new User({clerkId: id, email: email_addresses[0].email_address, name:`${first_name || ""} ${last_name || ""}`, image : image_url});
            await newUser.save();
        }
    }
);

const deleteUserFromDB = inngest.createFunction(
    {id: "delete-user-from-db"},
    {event: "clerk/user.deleted"},
    async({event}) => {
        await connectDB()
        const {id} = event.data;
        await User.deleteOne({clerkId:id})
    }
)

export const functions = [syncUser, deleteUserFromDB]