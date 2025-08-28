import React, {useState, useEffect} from "react";
import { StreamChat } from "stream-chat";
import { useUser } from "@clerk/clerk-react";
import { useQuery } from "@tanstack/react-query";
import { getStreamToken } from "../lib/api.js";
import * as Sentry from "@sentry/react";

const STREAM_API_KEY = import.meta.env.VITE_STREAM_API_KEY;

export const useStreamChat = () => {
    const { user } = useUser();
    const [chatClient, setChatClient] = useState(null);

    // console.log('User:', user);
    // console.log('User ID:', user?.id);
    // console.log('API Key:', STREAM_API_KEY);
  
    // fetch stream token using react-query
    const {
      data: tokenData,
      isLoading,
      error,
    } = useQuery({
      queryKey: ["streamToken"],
      queryFn: getStreamToken,
      enabled: !!user?.id, // this will take the object and convert it to a boolean
    });

    // console.log('Token Data:', tokenData);
    // console.log('Token Loading:', isLoading);
    // console.log('Token Error:', error);

  
    // init stream chat client
    // init stream chat client
    useEffect(() => {
      if (!tokenData?.token || !user?.id || !STREAM_API_KEY) return;
  
      const client = StreamChat.getInstance(STREAM_API_KEY);
      let cancelled = false;
  
      const connect = async () => {
        try {
          await client.connectUser(
            {
              id: user.id,
              name:
                user.fullName ?? user.username ?? user.primaryEmailAddress?.emailAddress ?? user.id,
              image: user.imageUrl ?? undefined,
            },
            tokenData.token
          );
          if (!cancelled) {
            setChatClient(client);
          }
        } catch (error) {
          console.log("Error connecting to stream", error);
          Sentry.captureException(error, {
            tags: { component: "useStreamChat" },
            extra: {
              context: "stream_chat_connection",
              userId: user?.id,
              streamApiKey: STREAM_API_KEY ? "present" : "missing",
            },
          });
        }
      };
  
      connect();
  
      // cleanup
      return () => {
        cancelled = true;
        client.disconnectUser();
      };
    }, [tokenData?.token, user?.id]);
  
    return { chatClient, isLoading, error };
  };