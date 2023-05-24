import express from "express";
import dotenv from "dotenv";
import color from "colors";
import connectDB from "./db/connect.js";
import cookieParser from "cookie-parser";

const PORT = process.env.PORT || 8800;

import authRoute from "./routes/auth.js";
import usersRoute from "./routes/user.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";

const app = express();
dotenv.config();

//middlewere
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.use((err, req, res, next) => {
  const errStatus = err.status || 500;
  const errMessage = err.message || "Something went wrong";
  res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMessage,
    stack: err.stack,
  });
});

const startServer = () => {
  try {
    connectDB(process.env.MONGODB);
    app.listen(PORT, () => {
      console.log(
        color.bgWhite(`Connected Backend on port http://localhost:${PORT}`)
      );
    });
  } catch (error) {
    console.log(error);
  }
};
startServer();
