import routes from "../routes";
import pool from "../db";

// 홈 Home
export const postCheckAlarmCount = async (req, res) => {
  try {
    let evilReportAlarmCount = 0;
    let qnaAlarmCount = 0;

    const evilReportsQuery = "SELECT * FROM evil_reports";
    const qnaQuery = "SELECT * FROM qna";

    const poolQueryFunc = (query, type) => {
      pool.query(query, (err, result) => {
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

    poolQueryFunc(evilReportsQuery, "evilReports");
    poolQueryFunc(qnaQuery, "qna");

    res.status(200).json({ msg: "success", evilReportAlarmCount, qnaAlarmCount });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: `server error: ${err}` });
  }
};

// TODO: 빨간줄 제거용 추후 삭제 필수
export const any = () => {};
