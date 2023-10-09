import express from 'express';
import router from '../ticker.js';
import routerM from '../home.js';
const PORT = process.env.PORT || 8080;
const app = express();

//app.use(express.static("public"));

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
