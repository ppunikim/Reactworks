// Common JS 문법 ES5 이전 문법
// http-proxy-middleware 컴포넌트에서 createProxyMiddleware함수를 사용하겠다 선언
const { createProxyMiddleware } = require("http-proxy-middleware");

/**
 * react 에서 /get/~~ 으로 요청 보내면
 * 자동으로 /get 대신 http://apis.data.go.kr에서 요청하는 것 처럼
 * 주소를 변경해 상대방의 CORS문제를 우회해 진행한다.
 */
module.exports = (app) => {
  app.use(
    "/get",
    createProxyMiddleware({
      target: "http://apis.data.go.kr",
      changeOrigin: true,
      pathRewrite: {
        "^/get": "",
      },
    })
  );
};
