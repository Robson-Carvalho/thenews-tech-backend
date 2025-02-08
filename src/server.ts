import { index } from "./index";

const PORT = process.env.PORT || 3030;

function log() {
  console.log("Server running!");
}

index.listen(PORT, log);
