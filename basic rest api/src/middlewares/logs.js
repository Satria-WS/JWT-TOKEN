export const logRequest = (req, res, next) => {
  console.log('log reg path to: ', req.path);
  next();
}

