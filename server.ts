import * as express from "express";

import { join } from "path";

export const app = express();

const DIST_FOLDER = join(process.cwd(), "dist/ng-sls-express");

app.get("*.*", express.static(join(DIST_FOLDER)));

app.get("/*", (req, res) => {
  res.sendFile(join(DIST_FOLDER + "/index.html"));
});
