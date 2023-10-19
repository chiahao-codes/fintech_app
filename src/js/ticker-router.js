import express from "express";
import path from "path";
const router = express.Router();

router.get("/stock/:ticker", (req, res, next) => {
  console.log(req);
  return res.sendFile(path.join("C:/Desktop/Ticqer", "/dist/ticker.html"));
});

export default router