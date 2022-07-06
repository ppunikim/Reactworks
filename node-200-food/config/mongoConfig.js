const USERNAME = "yd62322";
const PASSWORD = "!Korea8080";
const mongoURL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.zfqg8.mongodb.net/?retryWrites=true&w=majority`;

import mongoose from "mongoose";
const Schema = mongoose.Schema;

const food = Schema({
  f_date: String,
  f_foodName: String,
  f_eatNum: Number,
  f_kal: String,
  f_allKal: String,
});

const food_model = mongoose.model("food", food);
export { mongoURL, food_model };
