import express from "express";
import client from "../db";

const utilRouter = express.Router();

utilRouter.get("/query", async (req, res) => {
  const result = await client.query(`
  SELECT agent, COUNT(*) AS cnt
  FROM 
      (
      SELECT user_id, agent,
          ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY id DESC) AS rn
      FROM login_logs
      -- WHERE created_at >= NOW() - interval '30 day'
  ) AS x
  WHERE rn = 1
  GROUP BY agent;
  `);

  return res.json(result.rows);
});

utilRouter.get("/findSchema/:name", async (req, res) => {
  const { name } = req.params;
  const result = await client.query(`
  SELECT column_name, data_type 
  FROM information_schema.columns 
  WHERE table_name = '${name}';
    `);

  return res.json(result.rows);
});

utilRouter.use((_, res) => {
  res.status(405).send("[/util] - Method Not Allowed");
});

export default utilRouter;
