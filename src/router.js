import express from "express";

import problem1 from "./functions/problem1.js";

const router = new express.Router();

router.get("/api/problem1", function(req, res) {
  try {
    const input = parseFloat(req.body.input);

    if (isNaN(input)) {
      throw new Error();
    }

    const result = problem1(input);
    res.status(200).send({
      output: result,
    });
  } catch (e) {
    console.error(e);

    if (e instanceof Error) {
      res.status(400).send({ error: "Bad request" });
    } else {
      res.status(500).send({ error: "Internal server error" });
    }
  }
});

export default router;
