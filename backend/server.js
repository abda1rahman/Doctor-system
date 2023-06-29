const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const userRoutes = require("./routes/userRoutes.js");
// const cors = require("cors");

const app = express();

dotenv.config();

//mongodb conneection
connectDB();

//midleware
// app.use(
//   cors({
//     origin: true,
//     credentials:true,
//   })
// );

app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/admin", require("./routes/adminRoutes"));
app.use("/api/v1/doctor", require("./routes/doctorRoutes"));
//port
const port = process.env.PORT || 8080;

//listen port
app.listen(port, () => {
  console.log(
    `Server Running in ${process.env.NODE_MODE} Mode on port ${port}`
  );
});

// after merage 2 branch 