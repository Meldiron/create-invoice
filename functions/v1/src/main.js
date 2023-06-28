module.exports = async ({ req, res, log }) => {
  log("Works hihi haha huhu");
  return res.json(req.headers);
};
