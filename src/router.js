import express from "express";

import problem1 from "./functions/problem1.js";

const router = new express.Router();

router.get("/api/problem1", function(req, res) {
  try {
    const input = req.body.input.split(",");
    const num1 = parseFloat(input[0]);
    const num2 = parseFloat(input[1]);

    if (isNaN(num1) || isNaN(num2)) {
      throw new Error();
    }

    const result = problem1(num1, num2);
    res.status(200).send({
      output: result,
    });
  } catch (e) {
    if (e instanceof Error) {
      res.status(400).send({ error: "Bad request" });
    } else {
      res.status(500).send({ error: "Internal server error" });
    }
  }
});

export default router;
