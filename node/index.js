import express from "express";
import usersRouter from "./routes/users.js";
import couponRouter from "./routes/coupon.js";

const app = express();

app.get("/", (req, res) => {
    res.send("首頁");
});

app.use("/users", usersRouter);

app.use("/coupon", couponRouter);

app.listen(3000, () => {
    console.log("伺服器已啟動 http://localhost:3000");
});