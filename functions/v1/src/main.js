module.exports = async ({ req, res, log }) => {
  log("Works XYZ 3");
  return res.json(req.headers);
};
