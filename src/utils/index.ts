export const BACKEND_URL =
  process.env.NODE_ENV === "production"
    ? "railway-backend"
    : "http://localhost:3000";
