const express = require("express");
const bodyParser = require("body-parser");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
const port = 3200;

app.use(cors());

app.use(bodyParser.json());

const db = new sqlite3.Database(
  "./Compdb.db",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log("Connected to the comp database.");
  }
);

db.run("CREATE TABLE companies(name,location,id INTEGER PRIMARY KEY)");
// Middleware

// Routes
app.get("/companies", (req, res) => {
  db.all("SELECT * FROM companies", (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(rows);
    }
  });
});

app.get("/company/:id", (req, res) => {
  const companyId = req.params.id;
  db.get("SELECT * FROM companies WHERE id = ?", [companyId], (err, row) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    } else if (!row) {
      res.status(404).json({ error: "Company not found" });
    } else {
      res.json(row);
    }
  });
});

app.post("/company", (req, res) => {
  const { name, location } = req.body;
  db.run(
    "INSERT INTO companies (name, location) VALUES (?, ?)",
    [name, location],
    function (err) {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
      } else {
        res.status(201).json({ id: this.lastID, name, location });
      }
    }
  );
});

app.put("/company/:id", (req, res) => {
  const companyId = req.params.id;
  const { name, location } = req.body;
  db.run(
    "UPDATE companies SET name = ?, location = ? WHERE id = ?",
    [name, location, companyId],
    function (err) {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
      } else if (this.changes === 0) {
        res.status(404).json({ error: "Company not found" });
      } else {
        res.status(200).json({ id: companyId, name, location });
      }
    }
  );
});

app.delete("/company/:id", (req, res) => {
  const companyId = req.params.id;
  db.run("DELETE FROM companies WHERE id = ?", [companyId], function (err) {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    } else if (this.changes === 0) {
      res.status(404).json({ error: "Company not found" });
    } else {
      res.sendStatus(204);
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
