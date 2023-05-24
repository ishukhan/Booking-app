import Hotel from "../models/Hotel.js";

// CREATE CONTROLER
export const createHotels = async (req, res, next) => {
  // take hotel information from users
  const newHotel = new Hotel(req.body);

  try {
    const saveHotel = await newHotel.save();
    res.status(200).json(saveHotel);
  } catch (err) {
    next(err);
  }
};

//UPDATE CONTROLLER
export const updateHotel = async (req, res, next) => {
  try {
    const updateHotel = await Hotel.findByIdAndUpdate(
      req.params._id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateHotel);
  } catch (err) {
    next(err);
  }
};

//DELETE CONTROLLER
export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params._id);
    res.status(200).json("Hotel is been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
};

//GET CONTROLLER
export const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params._id);
    res.status(200).json(hotel);
  } catch (err) {
    next(err);
  }
};

//GET ALL CONTROLLER
export const getAllHotel = async (req, res, next) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
};
