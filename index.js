require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

const cors = require("cors");
//routes import
//const usersRouter = require("./routes/...");
//const ordersRouter = require("./routes/...");

//parse the body of any request coming from html forms
app.use(express.urlencoded({ extended: true }));

//parse the body of any request not coming through an html form
app.use(express.json());

//allow CORS from any origin
app.use(cors());

//INITIAL ROUTE
app.get("/", (req, res) => {
  res.send("Server is working!");
});

//ROUTES
// app.use("/...", ...Router);
// app.use("/...", ...Router);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});