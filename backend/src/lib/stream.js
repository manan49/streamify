import { StreamChat } from "stream-chat";
import dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;

if (!apiKey || !apiSecret) {
  console.error("❌ Stream API key or secret missing in environment variables");
}

const streamClient = StreamChat.getInstance(apiKey, apiSecret);

export async function upsertStreamUser({ id, name, image }) {
  if (!streamClient) {
    console.error("❌ Stream client not initialized");
    return;
  }

  try {
    // Authenticate server-side client with secret
    await streamClient.upsertUser({
      id,
      name,
      image,
    });
  } catch (error) {
    console.error("❌ Error upserting Stream user:", error.message);
  }
}
export const generateStreamToken = (userId) => {
  try {
    // ensure userId is a string
    const userIdStr = userId.toString();
    return streamClient.createToken(userIdStr);
  } catch (error) {
    console.error("Error generating Stream token:", error);
  }
};