import { useEffect, useState } from "react";
import type { Message } from "@/types";

export function useStreamMessages(url: string) {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const eventSource = new EventSource(url);
    eventSource.onopen = () => console.log("SSE connection opened");
    eventSource.onmessage = event => {
      const newMessage: Message = JSON.parse(event.data);
      setMessages(prevMessages => [...prevMessages, newMessage]);
    };

    return () => {
      console.log("Closing SSE connection");
      eventSource.close();
    };
  }, [url]);

  return messages;
}
