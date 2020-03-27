const Recipes = require('../model');

const authorization = async (req, res, next) => {
  try {
    if (!req.cookies || !req.cookies.token) res.status(401).send()
    const user = await Recipes.findOne({accessToken: req.cookies.token});
    if (user) {
      req.user = user;
      next();
    } else res.status(401).send();
  } catch (err) {
    console.log(err)
    res.status(500).send();
  }
    
}

module.exports = authorization