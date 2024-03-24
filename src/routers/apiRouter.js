import passport from "passport";
import express from "express";
import { postSidebarInfos } from "../controllers/apiController";
import client from "../db";
import { BASE_URL } from "../util";

const apiRouter = express.Router();

// 관리자 정보, cs, 고객문의 미처리건
apiRouter.post("/sidebar-infos", postSidebarInfos);

// 전체 유저 조회
apiRouter.get("/getUsers", async (req, res) => {
  const totalUsers = await client.query("SELECT count(*) FROM users");
  const subscribedUsers = await client.query("SELECT count(*) FROM users where issubscription=true");
  const normalUsers = await client.query("SELECT count(*) FROM users where issubscription=false");

  res.json({ totalUsers: totalUsers.rows[0].count, subscribedUsers: subscribedUsers.rows[0].count, normalUsers: normalUsers.rows[0].count });
});

apiRouter.get("/getTables", async (req, res) => {
  const result = await client.query(`SELECT table_name
  FROM information_schema.tables
  WHERE table_schema = 'public'
  AND table_type = 'BASE TABLE';`);
  res.json(result.rows);
});

apiRouter.get("/getSchema", async (req, res) => {
  const result = await client.query(`SELECT column_name, data_type, is_nullable
  FROM information_schema.columns
  WHERE table_name = 'admins';`);
  res.json(result.rows);
});

apiRouter.get("/room-users", async (req, res) => {
  const result = await client.query("SELECT * FROM room_users");

  res.json(result.rows);
});
apiRouter.get("/rooms", async (req, res) => {
  const result = await client.query("SELECT * FROM rooms where status='end'");

  res.json(result.rows);
});

apiRouter.get("/signup", async (req, res) => {
  const result = await client.query(`INSERT INTO admins (id, admin_id, login_pw, phone, name, email)
  VALUES
  (1, 'admin1', 'password123', '123-456-7890', 'John Doe', 'john@example.com'),
  (2, 'admin2', 'pass456', '987-654-3210', 'Jane Smith', 'jane@example.com'),
  (3, 'admin3', 'qwerty', '555-123-4567', 'Alice Johnson', 'alice@example.com')`);

  res.json(result.rows);
});

apiRouter.get("/adminUsers", async (req, res) => {
  console.log(req.user);
  const result = await client.query(`SELECT *
  FROM admins;`);

  res.json(result.rows);
});

apiRouter.post("/login", async (req, res, next) => {
  passport.authenticate("local", (err, user) => {
    if (err) return next(err);
    if (!user) return res.send(`로그인 정보가 잘못되었습니다.`);
    return req.logIn(user, (e) => {
      if (err) return next(e);
      return res.status(200).redirect(`${BASE_URL}/dashboard`);
    });
  })(req, res, next);
});

apiRouter.use((_, res) => {
  res.status(405).send("Method Not Allowed");
});

export default apiRouter;
