import express from 'express';
import router from '../public/js/ticker.js';
import routerM from '../public/js/home.js';
const PORT = process.env.PORT || 8080;
const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));

app.use((req, res, next) => {
res.header("Access-Control-Allow-Origin", "*");
next();
});

app.use(express.json());
app.use("/", routerM);
app.use("/stock", router);


app.listen(PORT, () => {
    console.log("Proxy listening on port:", PORT);
});
