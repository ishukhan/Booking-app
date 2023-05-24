import User from "../models/User.js";

//UPDATE USER
export const updateUser = async (req, res, next) => {
  try {
    const updateUser = await User.findByIdAndUpdate(
      req.params._id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateUser);
  } catch (err) {
    next(err);
  }
};

//DELETE USER
export const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params._id);
    res.status(200).json("User is been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
};

//GET USER
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params._id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

//GET ALL USER
export const getAllUser = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};
