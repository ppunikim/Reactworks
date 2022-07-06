import express from "express";
import { food_model } from "../config/mongoConfig.js";
const router = express.Router();

router.post("/insert", (req, res) => {
  food_model.create(req.body).then((result) => res.send("OK"));
});

router.get("/list", (req, res) => {
  food_model.find({}).then((result) => res.json(result));
});

export default router;
