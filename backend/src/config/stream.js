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

export const deleteStreamUser = async (userId) => {
  try {
    await streamChat.deleteUser(userId)
    console.log("Stream user deleted successfully:", userId)
  } catch (error) {
    console.log("Error deleting stream user:", error)
  }
}

export const generateStreamToken = async (userId) => {
  try {
    const userIdString = userId.toString()
    return streamChat.createToken(userIdString)
    // console.log("Stream token generated successfully:", token)
  } catch (error) {
    console.log("Error generating stream token:", error)
    return null
  }
}