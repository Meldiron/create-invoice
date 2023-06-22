module.exports = async ({ req, res, log }) => {
  return res.json(req.headers);
};
