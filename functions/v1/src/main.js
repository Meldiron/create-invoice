module.exports = async ({ req, res, log }) => {
  log("Works");
  return res.json(req.headers);
};
