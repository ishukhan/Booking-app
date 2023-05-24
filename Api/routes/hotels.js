import express from "express";
import {
  createHotels,
  deleteHotel,
  getAllHotel,
  getHotel,
  updateHotel,
} from "../controller/hotels.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const hotels = express.Router();

// CREATE
hotels.post("/", verifyAdmin, createHotels);

//UPDATE
hotels.put("/:_id", verifyAdmin, updateHotel);

//DELETE
hotels.delete("/:_id", verifyAdmin, deleteHotel);

//GET
hotels.get("/:_id", getHotel);

//GET ALL
hotels.get("/", getAllHotel);

// hotels.get("/", (req, res) => {
//   res.send("Hello this is hotels ensPoint!");
// });

export default hotels;
