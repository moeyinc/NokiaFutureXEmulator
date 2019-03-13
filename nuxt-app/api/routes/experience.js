var express = require('express');
var router = express.Router();
const storyConfig = require('../experience-config');

router.get('/experience/config', (req, res, next) => {
  res.json(storyConfig);
});

module.exports = router;
