const Recipes = require('../model');

const authorization = async (req, res, next) => {
  console.log(req.cookies);
  
  try {
    // const cookie = req.headers.cookie.slice(req.headers.cookie.indexOf('; token='), req.headers.cookie.length);
    // const sortedCookie = cookie.split('; token=').pop()
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