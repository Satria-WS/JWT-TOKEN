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

export const getByIdUsers = async (req, res) => {
  const { id } = req.params;
  console.log(id)
  try {
    const data = await userModel.getById(id);
    res.status(200).json({
      message: "Get id user",
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

export const createUser = async(req, res) => {
  console.log(req.body);
  const { name, email, address } = req.body;
  try {
    const data = await userModel.createUser(name , email , address);
    res.status(200).json({
      message: "create user",
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


export const updateUser = async(req, res) => {
  console.log(req.body);
  const { name, email, address } = req.body;
  const { id } = req.params;
  try {
    const data = await userModel.updateUser(id , name , email , address);
    res.status(200).json({
      message: "update user",
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

export const deleteUser = async(req, res) => {
  const { id } = req.params;
  // console.log(id)
  try {
    const findId = await userModel.getById(id);
    // console.log("findId",findId.length)
    if (findId.length === 0) {
      res.json({
        message:'id not found'
      })
      return;
    }

    const data = await userModel.deleteUser(id);
    res.status(200).json({
      message: "delete id user succesfull",
      data: undefined,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Server Error',
      server: err.message
    })
 }
};
