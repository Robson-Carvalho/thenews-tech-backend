import dotenv from "dotenv";

import path from "path";

if (process.env.NODE_ENV !== "production") {
  const envPath =
    process.env.NODE_ENV === "prod"
      ? path.resolve(__dirname, "../../../../.env.production.local")
      : process.env.NODE_ENV === "develop"
      ? path.resolve(__dirname, "../../../../.env.development.local")
      : path.resolve(__dirname, "../../../../.env.test.local");

  dotenv.config({ path: envPath });

  if (!process.env.DATABASE_URL) {
    console.error(
      "Error: DATABASE_URL is not defined in the environment variables."
    );
    process.exit(1);
  }
}
