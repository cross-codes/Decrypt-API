import pkg from "body-parser";
import express from "express";
import bodyParseErrorHandler from "express-body-parser-error-handler";

import router from "./router.js";

const { json, urlencoded } = pkg;
const app = express();

app.use(urlencoded({ extended: false, limit: "250kb" }));
app.use("/*", json({ limit: "250Kb" }));
app.use(bodyParseErrorHandler({
  onError: function(err, req, res) {
    res.status(400).send({ error: "Bad request" });
  },
}));
app.use(router);

export default app;
