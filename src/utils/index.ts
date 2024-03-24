export const BACKEND_URL =
  process.env.NODE_ENV === "production"
    ? "https://railway-backend-production-cceb.up.railway.app" // hardcode it for now, don't expect it to change
    : "http://localhost:3000";
