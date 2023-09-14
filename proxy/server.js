import express from 'express';
import bodyParser from 'body-parser';

const PORT = process.env.PORT || 8080;
const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use((req, res, next) => {
res.header("Access-Control-Allow-Origin", "*");
next();
});

app.use(bodyParser.json());

app.get("/", (req, res, next) => {
  res.render("index.ejs");
  next();
});

//stock data get request:
app.get("/stock/:ticker", (req, res, next) => {
    let ticker = req.params.ticker;
    res.send(ticker);
    next();
});
  

app.listen(PORT, () => {
    console.log("Proxy listening on port:", PORT);
});
