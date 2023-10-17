import express from 'express';
import router from '../ticker-router.js';
import routerM from '../home-router.js';
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static("dist"));

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
