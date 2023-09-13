//allow for env variables;
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';

const PORT = process.env.PORT || 8080;
const app = express();

app.set('view engine', 'ejs');

app.get("/", (req, res, next) => {
  res.render("index.ejs");
});

app.use(express.static("public"));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});
  

app.listen(PORT, () => {
    console.log("Proxy listening on port:", PORT);
});
