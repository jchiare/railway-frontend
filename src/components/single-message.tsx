import type { Message } from "@/types";

export function SingleMessage({ content, author }: Message) {
  return (
    <div>
      <p>{content}</p>
      <p>{author}</p>
    </div>
  );
}
