module.exports = async ({ req, res, log }) => {
  log("Works XYZ 2");
  return res.json(req.headers);
};
