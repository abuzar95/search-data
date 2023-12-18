const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/searchData", {
  useNewUrlParser: true
});

// Event handlers for Mongoose connection
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.error("Error connecting to MongoDB:", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("Disconnected from MongoDB");
});

module.exports = mongoose.connection;
