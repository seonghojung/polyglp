// 세자리 수마다 콤마 추가
export const addComma = (number: number) => {
  const regexp = /\B(?=(\d{3})+(?!\d))/g;
  return number.toString().replace(regexp, ",");
};
