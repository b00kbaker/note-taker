const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


app.get('/', (req, res) => res.sendFile(path.join(__dirname, './html/index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, './html/notes.html')));

app.get('/api/notes', (req, res) => res.sendFile(path.join(__dirname, 'db/db.json')));


require('./routes/notes.js')(app);

app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
});