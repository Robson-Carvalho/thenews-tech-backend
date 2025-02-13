import dotenv from "dotenv";

import path from "path";

if (process.env.NODE_ENV === "prod") {
  dotenv.config({ path: path.resolve(__dirname, "../../../../.env.prod") });
} else if (process.env.NODE_ENV === "prod") {
  dotenv.config({ path: path.resolve(__dirname, "../../../../.env.dev") });
} else if (process.env.NODE_ENV === "prod") {
  dotenv.config({ path: path.resolve(__dirname, "../../../../.env.test") });
}

if (!process.env.DATABASE_URL) {
  console.error(
    "Error: DATABASE_URL is not defined in the environment variables."
  );
  process.exit(1);
}
