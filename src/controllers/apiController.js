import routes from "../routes";
import client from "../db";

// 관리자 정보, cs, 고객문의 미처리건
export const postSidebarInfos = async (req, res) => {
  try {
    // 변수
    let evilReportAlarmCount = 0;
    let qnaAlarmCount = 0;
    // const adminUserID = req.user;
    // console.log(req.user);
    // 쿼리
    const evilReportsQuery = "SELECT * FROM evil_reports";
    const qnaQuery = "SELECT * FROM qna";
    const loginLogQuery = "SELECT * FROM login_logs";

    const clientQueryFunc = (query, type) => {
      client.query(query, (err, result) => {
        if (err) {
          console.error("Error executing query", err);
          res.status(500).send("Error executing query");
          return;
        }

        if (result.rows.length !== 0) {
          result.rows.forEach((x) => {
            if (type === "evilReports") {
              if (x.process === 0) {
                evilReportAlarmCount += 1;
              }
            } else if (type === "qna") {
              if (x.status === "접수(대기)") {
                qnaAlarmCount += 1;
              }
            }
          });
        }
      });
    };

    clientQueryFunc(evilReportsQuery, "evilReports");
    clientQueryFunc(qnaQuery, "qna");
    clientQueryFunc(loginLogQuery, "loginLog");

    // res.status(200).json({ msg: "success", evilReportAlarmCount, qnaAlarmCount, adminUserID });
    res.status(200).json({ msg: "success", evilReportAlarmCount, qnaAlarmCount });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: `server error: ${err}` });
  }
};

// 닉네임 중복 체크
export const postCheckDisplayNameDuplicate = async (req, res) => {
  try {
    const { displayName } = req.body;
    // 변수
    let isDuplicate = false;

    // 쿼리
    const checkDisplayNameQuery = "SELECT COUNT(*) AS count FROM users WHERE displayName = $1";

    const clientQueryFunc = (query, newDisplayName) => {
      client.query(query, (err, result) => {
        if (err) {
          console.error("Error executing query", err);
          res.status(500).send("Error executing query");
          return;
        }
        const count = result.rows[0].count;
        if (count > 0) {
          // 닉네임이 중복됨
          isDuplicate = true;
          console.log("닉네임 중복: ", newDisplayName);
        } else {
          // 중복 없음
          console.log("닉네임 중복 없음: ", newDisplayName);
        }
      });
    };

    clientQueryFunc(checkDisplayNameQuery, displayName);

    // res.status(200).json({ msg: "success", evilReportAlarmCount, qnaAlarmCount, adminUserID });
    res.status(200).json({ msg: "success" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: `server error: ${err}` });
  }
};

// TODO: 빨간줄 제거용 추후 삭제 필수
export const any = () => {};
