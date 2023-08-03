require('dotenv').config();
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const app = express();

console.log(process.env.SECRET_KEY);

app.use(cors());
app.listen(PORT, () => { console.log("Proxy listening on port:", PORT) });