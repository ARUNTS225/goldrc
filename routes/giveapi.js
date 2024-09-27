const express =require('express');
const { creategive } = require('../controllers/creategive');
const router = express.Router();

router.route('/giveapi').post(creategive);
module.exports = router;