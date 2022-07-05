//NodeJS, Express project의 Web Framework
import express from "express";
const router = express.Router();

router.get("/", (req, res, next) => {
  const query = req.query.name;
  // res.send("나에게 전달된 값 : " + query);
  res.json({ name: query });
});

export default router;
