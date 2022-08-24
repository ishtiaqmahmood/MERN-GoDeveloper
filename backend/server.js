const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// bringing routes
const userRoute = require("./routes/api/user");
const authRoute = require("./routes/api/auth");
const postRoute = require("./routes/api/post");
const profileRoute = require("./routes/api/profile");

const app = express();

// database
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected");
  });

// init Middleware
app.use(express.json({ extended: false }));
app.use(cors());

app.get("/", (req, res) => res.send("API running"));

// routes
app.use("/api/users/", userRoute);
app.use("/api/auth/", authRoute);
app.use("/api/post/", postRoute);
app.use("/api/profile/", profileRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
