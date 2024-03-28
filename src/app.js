import "core-js/stable";
import "regenerator-runtime/runtime";
import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import passport from "passport";
import session from "express-session";
import path from "path";
import morgan from "morgan";
import apiRouter from "./routers/apiRouter";

import "./passport";
import userRouter from "./routers/userRouter";
import dashboardRouter from "./routers/dashboardRouter";
import utilRouter from "./routers/utilRouter";

const app = express();

const isDevMode = process.env.mode === "dev";

if (isDevMode) {
  app.use(
    cors({
      credentials: true,
      origin: "https://localhost:3000",
      optionsSuccessStatus: 200,
    })
  );
  app.set("trust proxy", 1);
}
app.use(cookieParser());
app.use(
  bodyParser.json({
    limit: "50mb",
  })
);
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(morgan("dev"));

app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 24 * 60 * 60 * 1000 },
  })
);

app.use(passport.initialize());
app.use(passport.session());

// ping
app.get("/ping", (req, res) => {
  res.end("pong");
});

app.use("/api", apiRouter);
app.use("/user", userRouter);
app.use("/dashboard", dashboardRouter);
app.use("/util", utilRouter);

if (isDevMode) {
  app.use((_, res) => {
    res.status(405).json({ message: "일치하는 메서드를 찾지 못했습니다." });
  });
}

app.use(express.static(path.join(__dirname, "public")));

app.use("*", (_, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

export default app;
