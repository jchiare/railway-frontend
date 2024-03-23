import { SingleMessage } from "@/components/single-message";
import type { Message } from "@/types";

type MessagesProps = {
  messages: Message[];
};

export function Messages({ messages }: MessagesProps) {
  return (
    <div>
      {messages.map(message => (
        <SingleMessage key={message.author + message.content} {...message} />
      ))}
    </div>
  );
}
