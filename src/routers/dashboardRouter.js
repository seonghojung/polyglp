import express from "express";
import client from "../db";
import { BASE_URL } from "../util";

const dashboardRouter = express.Router();

dashboardRouter.get("/dashboard", async (req, res) => {
  // 1. 총 영상통화시간 --- @TODO: 계산 기준 문의필요
  // 2. 비즈니스 영상 통화 시간 --- @TODO: 계산 기준 문의필요
  // 3. 랜덤 영상 통화 시간 --- @TODO: 계산 기준 문의필요
  // 4. 총 회원 수
  const totalUsers = await client.query("SELECT count(*) FROM users");
  // 5. 무료 회원 수
  const subscribedUsers = await client.query("SELECT count(*) FROM users where issubscription=true");
  // 6. 구독 회원 수
  const normalUsers = await client.query("SELECT count(*) FROM users where issubscription=false");

  res.json({ totalUsers: totalUsers.rows[0].count, subscribedUsers: subscribedUsers.rows[0].count, normalUsers: normalUsers.rows[0].count });
});

dashboardRouter.use((_, res) => {
  res.status(405).send("[/dashboard] - Method Not Allowed");
});

export default dashboardRouter;
