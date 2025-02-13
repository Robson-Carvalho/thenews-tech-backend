import dotenv from "dotenv";

import path from "path";

if (process.env.NODE_ENV === "prod") {
  dotenv.config({
    path: path.resolve(__dirname, "../../../../.env.production"),
  });
} else if (process.env.NODE_ENV === "dev") {
  dotenv.config({
    path: path.resolve(__dirname, "../../../../.env.development"),
  });
} else if (process.env.NODE_ENV === "test") {
  dotenv.config({ path: path.resolve(__dirname, "../../../../.env.testing") });
}

if (!process.env.DATABASE_URL) {
  console.error(
    "Error: DATABASE_URL is not defined in the environment variables."
  );
  process.exit(1);
}
