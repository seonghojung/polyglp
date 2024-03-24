import express from "express";
import client from "../db";

const dashboardRouter = express.Router();

// 대시보드 - 통합 지표 표기
dashboardRouter.get("/integratedIndex", async (req, res) => {
  try {
    // 1. 총 영상통화시간 --- @TODO: 계산 기준 문의필요
    const {
      rows: [{ count: totalVideoCallTime }],
    } = { rows: [{ count: 0 }] };

    // 2. 비즈니스 영상 통화 시간 --- @TODO: 계산 기준 문의필요
    const {
      rows: [{ count: businessVideoCallTime }],
    } = { rows: [{ count: 0 }] };

    // 3. 랜덤 영상 통화 시간 --- @TODO: 계산 기준 문의필요
    const {
      rows: [{ count: randomVideoCallTime }],
    } = { rows: [{ count: 0 }] };

    // 4. 총 회원 수
    const {
      rows: [{ count: totalUsers }],
    } = await client.query("SELECT count(*) FROM users WHERE isdel = false");

    // 5. 무료 회원 수
    const {
      rows: [{ count: subscribedUsers }],
    } = await client.query("SELECT count(*) FROM users where isdel = false AND issubscription=true");

    // 6. 구독 회원 수
    const {
      rows: [{ count: normalUsers }],
    } = await client.query("SELECT count(*) FROM users where isdel = false AND issubscription=false");

    const getSubscribedUserGraph = async (startDuration, endDuration) => {
      const { rows: data } = await client.query(`
            SELECT TO_CHAR(DATE_TRUNC('month', sdate), 'YY년 MM월') AS month,
            COUNT(*) AS count
            FROM pays
            WHERE sdate >= TIMESTAMP ${startDuration}
            AND sdate < TIMESTAMP ${endDuration}
            GROUP BY DATE_TRUNC('month', sdate)
            ORDER BY month
        `);
      return data;
    };

    const startDuration = "'2024-03-19T06:14:39.591Z'";
    const endDuration = "'2024-03-24T06:14:39.591Z'";
    // 7. 구독 회원 수
    const asd = await getSubscribedUserGraph(startDuration, endDuration);

    return res.status(200).json({ totalVideoCallTime, businessVideoCallTime, randomVideoCallTime, totalUsers, subscribedUsers, normalUsers, asd });
  } catch (error) {
    return res.sendStatus(500);
  }
});

// 대시보드 - 트렌드 지표
dashboardRouter.get("/trendIndex", async (req, res) => {});

// 대시보드 - 언어 별 매칭 통계
dashboardRouter.get("/languageMatchingIndex", async (req, res) => {});

// 대시보드 - APP 통계
dashboardRouter.get("/appIndex", async (req, res) => {});

dashboardRouter.use((_, res) => {
  res.status(405).send("[/dashboard] - Method Not Allowed");
});

export default dashboardRouter;
