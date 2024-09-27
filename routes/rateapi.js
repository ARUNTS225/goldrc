const express =require('express');
const { convert } = require('../controllers/convert');
const router = express.Router();

router.route('/rateapi').get(convert);
module.exports = router;