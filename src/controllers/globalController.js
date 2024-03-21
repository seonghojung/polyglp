import routes from "../routes";

// 홈 Home
export const home = async (req, res) => {
  try {
    // 폴글 디비로 가고
    // 반환
    res.render("home");
  } catch (err) {
    console.log(err);
    res.send(
      `<script>alert("오류가 발생했습니다:\\r\\n${err}");\
      location.href="${routes.home}"</script>`
    );
  }
};

export const anotherController = () => {};
