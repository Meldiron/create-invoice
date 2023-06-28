module.exports = async ({ req, res, log }) => {
  log("Works XYZA work please :((");
  return res.json(req.headers);
};
