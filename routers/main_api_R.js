const express = require('express');
const router = express.Router();
module.exports = router;

const categ_R = require('./categ_R');
router.use('/CTG',[],categ_R);
const units_R = require('./units_R');
router.use('/UNT',[],units_R);
