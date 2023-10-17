import express from "express";
import path from 'path';
const routerM = express.Router();


routerM.get("/", (req, res, next) => {
  return res.sendFile(path.join("C:/Desktop/Ticqer","/dist/homepage.html"));
  
});

export default routerM;
