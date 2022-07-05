//NodeJS, Express project의 Web Framework
import express from "express";
import { bucket_model } from "../config/mongoConfig.js";

const router = express.Router();

router.get("/", (req, res, next) => {
  const query = req.query.name;
  // res.send("나에게 전달된 값 : " + query);
  res.json({ name: query });
});

//localhost:3000/bucket주소로 POST 데이터가 전송되어오면,
router.post("/", (req, res) => {
  /*
  bucket_model에 설정된 사항을 참고하여
  모든 ({}) 데이터를 selectAll(find())하고
  결과를 result변수에 받고
  result변수에 받은 데이터를 JSON type으로 client에게 보내라.
  */
  const body = req.body;
  console.table(body);
  bucket_model.create(body).then((result) => res.send("OK"));
});
router.get("/list", (req, res) => {
  bucket_model.find({}).then((result) => res.json(result));
});

export default router;
