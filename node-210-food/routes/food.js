import express from "express";
const router = express.Router();
import { food_model } from "../config/mongoConfig.js";

router.get("/selectAll", (req, res) => {
  food_model.find({}).then((result) => res.json(result));
});

router.post("/insert", (req, res) => {
  console.log(req.body);
  //POST localhost:3000/food/insert 로 받는다.
  food_model.create(req.body);
  res.json({ OK: "OK" });
});

router.delete("/remove/:id", (req, res) => {
  const id = req.params.id;
  console.log("받은 ID : ", id);
  food_model.findOneAndDelete({ d_id: id }).exec().then(res.send("OK"));
});

export default router;

/* ``` REST FUL 방식의 요청 ```
``` router, Controller에서 사용하는 RequestMethod ```
- a href , form 으로 사용 가능
 get: 데이터 요청
 post: 데이터 추가

- ajax type으로 요청할때만 사용 가능
 delete: 데이터 삭제
 put: 데이터 업데이트
*/
