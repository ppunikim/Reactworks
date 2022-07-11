import express from "express";
const router = express.Router();
import { food_model } from "../config/mongoConfig.js";

router.post("/insert", (req, res) => {
  console.log(req.body);
  //POST localhost:3000/food/insert 로 받는다.
  food_model.create(req.body);
  res.json({ OK: "OK" });
});

export default router;
