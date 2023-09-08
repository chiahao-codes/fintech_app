//allow for env variables;
require('dotenv').config();

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static("public"));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });

app.listen(PORT, () => {
    console.log("Proxy listening on port:", PORT);
});
