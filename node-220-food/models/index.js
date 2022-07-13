import { Sequelize } from "sequelize";

/* mysqlConfig에서 export default로 변수 내보냈어서,
   여기에서 선언하는 config변수는 {}로 묶지 않는다. */
import config from "../config/mysqlConfig.js";
import initModel from "./init-models.js";

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
const db = initModel(sequelize);

/**한 개의 파일(모듈) 에서 다수(2개 이상)의 변수(또는 함수)
   를 내보낼 때 사용*/
export { db, sequelize };
