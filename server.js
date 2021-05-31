const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("./assets/js/index.js", (req, res) => {
    res.sendFile(path.join(__dirname, "./assets/js/index.js"))
});

app.get("./assets/css/style.css", (req, res) => {
    res.sendFile(path.join(__dirname, "./assets/css/style.css"))
});

// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "./html/index.html"))
// });

app.get('/', (req, res) => res.sendFile(path.join(__dirname, './html/index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, './html/notes.html')));


require('./routes/notes.js')(app);

app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
});