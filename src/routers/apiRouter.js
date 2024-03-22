import express from "express";
import { postSidebarInfos } from "../controllers/apiController";

const apiRouter = express.Router();

// 관리자 정보, cs, 고객문의 미처리건
apiRouter.post("/sidebar-infos", postSidebarInfos);

apiRouter.use((_, res) => {
  res.status(405).send("Method Not Allowed");
});
export default apiRouter;
