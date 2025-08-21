import {StreamChat} from "stream-chat"
import { ENV } from "../config/env.js"

const streamChat = new StreamChat(ENV.STREAM_API_KEY, ENV.STREAM_API_SECRET)

export const upsertStreamUser = async (user) => {
  const userData = {
    id: user.id,
    name: user.name,
    image: user.image,
    role: user.role,
  }

  try {
    await streamChat.upsertUser(userData)
    console.log("Stream user upserted successfully:", userData.name)
    return userData;
  } catch (error) {
    console.log("Error upserting stream user:", error)
  }
}

export const deleteStreamUser = async (user) => {
  try {
    await streamChat.deleteUser(user.id)
    console.log("Stream user deleted successfully:", user.name)
  } catch (error) {
    console.log("Error deleting stream user:", error)
  }
}