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
  const filepath = path.resolve(__dirname, '../data.json');
  const data = fs.readFileSync(filepath);
  const parsedData = JSON.parse(data)
  parsedData.selectedSleeveId = sleeveId;
  const newData = JSON.stringify(parsedData);
  fs.writeFile(filepath, newData, 'utf8', (err) => {
    if (err) res.status(500).send({error: 'Error on writing JSON'});
    else {
      console.log('New sleeveId: ', sleeveId);
      res.send('OK');
    }
  });
});

module.exports = router;
