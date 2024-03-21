import express from "express";
import { postCheckAlarmCount } from "../controllers/apiController";

const apiRouter = express.Router();

// cs, 고객문의 미처리건
apiRouter.post("/check-alarm-count", postCheckAlarmCount);

apiRouter.use((_, res) => {
  res.status(405).send("Method Not Allowed");
});
export default apiRouter;
