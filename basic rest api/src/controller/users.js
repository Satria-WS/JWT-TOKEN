export const getAllUsers = (req, res) => {
  res.json({
    message: 'get ALL USER'
  })
}

export const createUser = (req, res) => {
  console.log(req.body);
  res.json({
    message: 'create  USER',
    data: req.body
  })
}