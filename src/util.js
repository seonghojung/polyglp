import moment from "moment-timezone";

export const BASE_URL = process.env.mode === "dev" ? "https://localhost:3000" : "";
// 시간 계산
export const calcMomentTZ = (time) => {
  let calcTime;
  if (process.env.mode === "dev") {
    calcTime = moment(time);
  } else if (process.env.mode !== "dev") {
    calcTime = moment(time).subtract(9, "hours");
  }
  return calcTime;
};
// 세자리 수마다 콤마 추가
export const addComma = (number) => {
  const regexp = /\B(?=(\d{3})+(?!\d))/g;
  return number.toString().replace(regexp, ",");
};
// 날짜 형식 변환
export const dateFormatYMD = (date) => moment(date).tz("Asia/Seoul").format("YYYY-MM-DD");
export const dateFormatYMDHm = (date) => moment(date).tz("Asia/Seoul").format("YYYY-MM-DD HH:mm");
export const dateFormatYMDHms = (date) => moment(date).tz("Asia/Seoul").format("YYYY-MM-DD HH:mm:ss");
// 해당하는 문자열 모두 치환
export const replaceAll = (str, searchStr, replaceStr) => str.split(searchStr).join(replaceStr);
// 배열 Random 섞기
export const shuffleArray = (arr) => {
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
};
// 배열에 특정 문자열 포함되어 있는지 체크하는 함수
export const arrIncludesStr = (arr, str) => {
  const arr2 = arr.map((x) => String(x._id));
  return arr2.includes(str);
};
