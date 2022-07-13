import express from "express";
const router = express.Router();

import { db } from "../models/index.js";
const { tbl_food } = db;

router.get("/selectAll", (req, res) => {
  tbl_food.findAll().then((result) => res.json(result));
});

router.post("/insert", (req, res) => {
  req.body.d_id = 0;
  tbl_food
    .create(req.body)
    .then(res.json("OK"))
    .catch((err) => res.json(err));
});

router.delete("/remove/:id", (req, res) => {
  const id = req.params.id;
  tbl_food
    .destroy({ where: { d_id: id } })
    .then(res.json("OK"))
    .catch((err) => res.json(err));
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
