const express = require("express");
const db = require("./database/database");
const app = express();
const apiRouter = require("./routes/index")
const { PORT } = require("./env");
app.use(express.json())
app.use("/", apiRouter);

db.sync().then(() => {
  console.log("Connection established to database");
  app.listen(PORT, console.log(`listening to port ${PORT}`));
});
