const express = require('express');
const router = express.Router();
const config = require('../experience-config');
const fs = require('fs');
const path = require('path');

router.get('/experience/config', (req, res, next) => {
  res.json(config);
});

router.get('/experience/selected-sleeve-id', async (req, res, next) => {
  let data;
  try {
    data = await readExperienceData();
  } catch (err) {
    res.status(500).send({error: err});
    return;
  }
  res.json(data);
});

router.post('/experience/selected-sleeve-id', async (req, res, next) => {
  const sleeveId = req.body.sleeveId;
  let data;
  try {
    data = await readExperienceData();
  } catch (err) {
    res.status(500).send({error: err});
    return;
  }

  data.selectedSleeveId = sleeveId;

  try {
    await writeExperienceData(data);
  } catch (err) {
    res.status(500).send({error: err});
    return;
  }

  res.send('OK');
});


/**
 * readExperienceData
 *
 */
async function readExperienceData() {
  const filepath = path.resolve(__dirname, '../data.json');
  if (!fs.existsSync(filepath)) {
    try {
      await fs.promises.writeFile(filepath, '{}', 'utf8');
    } catch (err) {
      throw new Error('Error on writing JSON');
    }
    return {};
  } else {
    let data;
    try {
      data = await fs.promises.readFile(filepath, 'utf8');
    } catch (err) {
      throw new Error('Error on reading JSON');
    }
    return JSON.parse(data);
  }
}


/**
 * writeExperienceData
 *
 * @param {!Object} data
 */
async function writeExperienceData(data) {
  const filepath = path.resolve(__dirname, '../data.json');
  try {
    await fs.promises.writeFile(filepath, JSON.stringify(data), 'utf8');
  } catch (err) {
    throw new Error('Error on writing JSON');
  }
}

module.exports = router;
