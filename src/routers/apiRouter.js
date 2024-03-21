import express from "express";
import { postCheckAlarmCount } from "../controllers/apiController";

const apiRouter = express.Router();

// cs, 고객문의 미처리건
apiRouter.post("/check-alarm-count", postCheckAlarmCount);

export default apiRouter;
