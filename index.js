const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get("/",(req,res) => {
    console.log("Hello from AWS Abishek Node APP");
    res.send("Hello from AWS Abishek Node APP");
})

app.listen(9000, () => {
    console.log("Server started ....");
})