import routes from "../routes";

// 홈 Home
export const postCheckAlarmCount = async (req, res) => {
  try {
    console.log(req.user);
    // console.log(body);

    // TODO: json 반환 처리에대한 코드 통일
    res.status(200).json({ msg: "" });
    // res.json({ msg: "success" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: `server error: ${err}` });
  }
};
