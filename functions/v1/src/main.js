module.exports = async ({ req, res, log }) => {
  log("Works XYZ");
  return res.json(req.headers);
};
