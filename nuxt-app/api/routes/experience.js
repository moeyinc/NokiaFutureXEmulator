const express = require('express');
const router = express.Router();
const config = require('../experience-config');
const fs = require('fs');
const path = require('path');

router.get('/experience/config', (req, res, next) => {
  res.json(config);
});

router.get('/experience/selected-sleeve-id', (req, res, next) => {
  const data = fs.readFileSync(path.resolve(__dirname, '../data.json'));
  const parsedData = JSON.parse(data);
  res.json(parsedData);
});

router.post('/experience/selected-sleeve-id', (req, res, next) => {
  const sleeveId = req.body.sleeveId;
  const data = fs.readFileSync(path.resolve(__dirname, '../data.json'));
  const parsedData = JSON.parse(data)
  parsedData.selectedSleeveId = sleeveId;
  const newData = JSON.stringify(parsedData);
  fs.writeFile(path.resolve(__dirname, '../data.json'), newData, 'utf8');
  res.send('OK');
});

module.exports = router;
