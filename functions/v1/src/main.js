module.exports = async ({ req, res, log }) => {
  log("Works hihi haha");
  return res.json(req.headers);
};
