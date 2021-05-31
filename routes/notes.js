const path = require("path");
const fs = require("fs");

// API calls to backend (create data/store/retrieve old data)

module.exports = (app) => {

    // Retrieve (GET) old note
  app.get("/api/notes", (req, res) => {
    console.log(res);
    fs.readFile("./db/db.json", (err, data) => {
      if (err) {
        console.error(err);
      } else {
        res.json(JSON.parse(data));
      }
    });
  });

  //Create (POST) new note to backend db
  app.post("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", (err, data) => {
      let noteArray = JSON.parse(data);
      noteArray.push(req.body);
      fs.writeFile("./db/db.json", JSON.stringify(noteArray), (err) => {
        if (err) console.log(err);
        else {
          res.json(req.body);
        }
      });
    });
  });
  
//   DELETE note from viewing on Front End and from Back End db
  app.delete("/api/notes/:id", (req, res) => {
    let id = req.params.id;
    fs.readFile("./db/db.json", (err, data) => {
      data = JSON.parse(data);
      data = data.filter((text) => text.id != id);

      fs.writeFile("./db/db.json", JSON.stringify(data), (err) => {
        if (err) console.log(err);
        else {
          console.log("note deleted\n");
          res.json({});
        }
      });
    });
  });
  
};
