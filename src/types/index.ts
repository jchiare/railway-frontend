export type Message = {
  id: string;
  content: string;
  author: string;
  userAvatar: string | null;
  createdAt: string;
  linkToMessage: string;
  inThread: boolean;
};
