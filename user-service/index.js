const express = require("express");
const app = express();
const port = 3000;
const userRouter = express.Router();
const userRouters = require("./routes/index");

app.use("/users", ...userRouters);

app.listen(port, () => {
  console.log(`Users Service listening at http://localhost:${port}/users`);
  // console.log(`Users Service listening at XXXXXXXXXXXXXXXX:${port}/users/1`);
});
