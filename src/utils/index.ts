export const BACKEND_URL =
  process.env.NODE_ENV === "production"
    ? "http://railway-backend.railway.internal:3000" // hardcode it for now, don't expect it to change
    : "http://localhost:3000";
