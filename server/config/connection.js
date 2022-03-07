const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb:localhost:27017/david-tech-blog",
  {
    useNewUrlParser: true,
    useUnifiedToplogy: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  console.log("Database Succesffully Connected")
);
module.exports = mongoose.connection;
