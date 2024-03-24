import express from "express";
import client from "../db";

const userRouter = express.Router();

userRouter.get("/findOne/:userID", async (req, res) => {
  try {
    const { userID } = req.params;
    const result = await client.query(`SELECT * FROM users WHERE id=${userID}`);
    if (result.rows <= 0) {
      return res.status(404).json([]);
    }
    return res.status(200).json(result.rows);
  } catch (error) {
    return res.sendStatus(500);
  }
});

userRouter.use((_, res) => {
  res.status(405).send("[/user] - Method Not Allowed");
});

export default userRouter;
