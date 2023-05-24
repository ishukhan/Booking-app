import express from "express";
import {
  createRoom,
  deleteRoom,
  getAllRoom,
  getRoom,
  updateRooms,
} from "../controller/rooms.js";

import { verifyAdmin } from "../utils/verifyToken.js";

const rooms = express.Router();

rooms.post("/:hotelid", verifyAdmin, createRoom);

rooms.put("/:id", verifyAdmin, updateRooms);

rooms.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

rooms.get("/:id", verifyAdmin, getRoom);

rooms.get("/", getAllRoom);

export default rooms;
