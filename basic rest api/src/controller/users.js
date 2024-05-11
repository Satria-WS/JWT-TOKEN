import userModel from "../models/users.js";

export const getAllUsers = async (req, res) => {
  try {
    const data = await userModel.getAll();
    res.status(200).json({
      message: "Get all user",
      data: data,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Server Error',
      server: err.message
    })
 }
};

export const createUser = (req, res) => {
  console.log(req.body);
  res.json({
    message: "create  USER",
    data: req.body,
  });
};


export const updateUser = (req, res) => {
  const paramsId = req.params;
  console.log(paramsId);
  const data = req.body;
  res.json({
    message: "update  USER",
   ...paramsId,
    data: data
  });
};

export const deleteUser = (req, res) => {
  const data = {  id: req.params.id,name: "tole", email: "tole@gmail.com", address: "sawangan" };


  res.json({
    message: "delete  USER",
    data: data,
  });
};