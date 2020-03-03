const router = require('express').Router();
const controller = require('./controller');
const authorization = require('./middlewares/authorization');


router.post('/picture', authorization, controller.postPicture);
router.get('/picture/tags', authorization, controller.checkPicture);
router.post('/', controller.signUp)

module.exports = router;