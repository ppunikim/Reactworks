/*
fetch함수를 사용해 data.go.kr의 API연결하기.
*/
const apiURL = "/get/1360000/WthrWrnInfoService/getWthrWrnList";
const apiServiceKey =
  "PmpYt0ZQ%2FbBWKBBzWOKTVJ8U%2F3CHDvVGUiXiFpKDe8guos8Hh1Oj%2BJvSEqBvUCPbgOjKDQPQC8wLioFoid4TAg%3D%3D";

const FetchData = async () => {
  const serviceURL = `${apiURL}?serviceKey=${apiServiceKey}&dataType=JSON&pageNo=1&numOfRows=100`;
  console.log(serviceURL);
  const response = await fetch(serviceURL);
  const json = await response.json();
  return json;
};
export { FetchData };
