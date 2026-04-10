const express = require("express");

const app = express();

app.get("/hello", (req, res) => {
    res.send("Hello, world!");
});

app.get("/bye", (req, res) => {
    res.send("Goodbye, world!");
});
app.listen(8080, () => {
    console.log('Server listening on port 8080!')
});

