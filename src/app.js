const express = require("express");
const port = 5000;
const app = express();
const db = require("./db/connection");
const {router} = require("./routes");
const cors = require("cors");


app.use(express.json());
app.use(cors());
app.use("/api", router);
app.use(express.json());

// Listener
app.listen(port, () => {
  console.log(`Search Data app listening at http://localhost:${port}`);
  console.log('\x1b[33m%s\x1b[0m', '[!] Connection to database...');
  // Database connection error
  db.on('error', (err) => {
    console.error(err);
  });
  // Database connection open
  db.on('open', () => {
    console.log('\x1b[32m', '[+] Database Connected');
    console.log('\x1b[32m', `[+] Server Started: http://localhost:${port}`);
  });
});

module.exports = { app };
