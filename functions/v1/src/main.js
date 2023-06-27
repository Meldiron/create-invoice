module.exports = async ({ req, res, log }) => {
  log("Works2");
  return res.json(req.headers);
};
