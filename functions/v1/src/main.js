module.exports = async ({ req, res, log }) => {
  log("Works XYZA");
  return res.json(req.headers);
};
