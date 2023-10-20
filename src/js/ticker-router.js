import express from "express";
import path from "path";
const router = express.Router();

router.get('/ticker', (req, res, next) => {
  return res.sendFile(path.join("C:/Desktop/Ticqer", "/dist/ticker.html"));
});

export default router