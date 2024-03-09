const express = require("express");
const authRouter = require("./routes/auth");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");

dotenv.config();
// connections
mongoose
  .connect(process.env.MONGO_URL, )
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log("Database connection failed");
  });


const app = express();
app.use(express.json());
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/", authRouter);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});
