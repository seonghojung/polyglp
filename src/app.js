import "core-js/stable";
import "regenerator-runtime/runtime";
import express from "express";

import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import passport from "passport";
import session from "express-session";
import path from "path";
import morgan from "morgan";

// import authRouter from "./routers/authRouter";
import pool from "./db";
import "./passport";

const app = express();

app.use(cookieParser());
app.use(
  bodyParser.json({
    limit: "50mb",
  })
);
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(morgan("dev"));
app.set("trust proxy", 1); // 개발용 @TODO: 추후 제거
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

app.get("/users", (req, res) => {
  const query = "SELECT * FROM users";

  pool.query(query, (err, result) => {
    if (err) {
      console.error("Error executing query", err);
      res.status(500).send("Error executing query");
      return;
    }

    res.json(result.rows);
  });
});

// 세션 작동테스트
app.get("/test", (req, res, next) => {
  if (req.session.views) {
    req.session.views += 1;
    res.status(200).json({ message: req.session.views });
  } else {
    req.session.views = 1;
    res.status(200).json({ message: "welcome to the session demo. refresh!" });
  }
});

// ping
app.get("/ping", (req, res, next) => {
  res.end("pong");
});

app.use(express.static(path.join(__dirname, "/build")));

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/build/index.html"));
});

export default app;
