import passport from "passport";
import LocalStrategy from "passport-local";
import bcrypt from "bcrypt";
import client from "./db";

passport.use(
  new LocalStrategy(
    {
      usernameField: "userID",
      passwordField: "password",
    },
    async (username, password, done) => {
      try {
        const res = await client.query("SELECT id, admin_id, login_pw, name FROM admins WHERE admin_id = $1", [username]);
        if (res.rows.length <= 0) return done(null, null);
        const first = res.rows[0];
        if (password !== first.login_pw) return done(null, null);

        return done(null, { id: first.id, userID: first.admin_id, name: first.name });
      } catch (err) {
        return done(null, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  console.log("serialize");
  done(null, user);
});

passport.deserializeUser((user, done) => {
  console.log("deserialize");
  done(null, user);
});
