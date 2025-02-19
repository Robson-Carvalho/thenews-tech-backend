require("./infrastructure/config/env/index");

import { index } from "./index";

const PORT = process.env.PORT || 3030;

index.listen(PORT);
