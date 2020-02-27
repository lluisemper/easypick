const router = require('express').Router();
const controller = require('./controller');

router.post('/picture', controller.postPicture);
router.get('/picture/tags', controller.checkPicture);

module.exports = router;