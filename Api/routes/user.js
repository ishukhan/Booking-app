import express from "express";
import {
  deleteUser,
  getAllUser,
  getUser,
  updateUser,
} from "../controller/users.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const users = express.Router();

// users.get("/checkauthenticated", verifyToken, (req, res, next) => {
//   res.send("you successfully login!");
// });
// users.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("hello user,you are logein you can delete your account!");
// });
// users.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("hello Admin,you are logein you can delete all account!");
// });

// UPDATE
users.put("/:_id", verifyUser, updateUser);

// DELETE
users.delete("/:_id", verifyUser, deleteUser);

//GET
users.get("/:_id", verifyUser, getUser);

//GET ALL
users.get("/", verifyAdmin, getAllUser);

// users.get("/", (req, res) => {
//   res.send("Hello this is users endPoint!");
// });

export default users;
