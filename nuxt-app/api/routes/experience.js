var express = require('express');
var router = express.Router();
const config = require('../experience-config');

router.get('/experience/config', (req, res, next) => {
  res.json(config);
});

module.exports = router;
