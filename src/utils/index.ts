export const BACKEND_URL =
  process.env.NODE_ENV === "production"
    ? "http://railway-backend.railway.internal"
    : "http://localhost:3000";
