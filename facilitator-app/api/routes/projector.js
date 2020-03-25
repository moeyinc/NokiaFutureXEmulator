var express = require('express');
var router = express.Router();
var PROJECTORS = require('../projector-config.js');
var Pjlink = require('pjlink');

/* GET state of a projector */
router.get('/projector/power/:id', function(req, res, next) {
  console.log('get state of a projector', req.params.id);
  if (PROJECTORS.DISABLED) {
    console.log('projector control is disabled by your configuration');
    res.send({state: false});
    return;
  }
  var target = PROJECTORS.TARGETS[req.params.id];
  var pj = new Pjlink(target.URL, target.PORT, target.PASSWORD);

  // Returns current power state
  pj.getPowerState(function(err, state){
  	if (err) {
  		console.log('getPowerState error', err);
  		return;
  	} else {
      console.log('getPowerState ok', state);
    }
    res.send({state: state});
  });
});

/* POST turn on/off all projectors */
router.post('/projector/power/all', function(req, res, next) {
  console.log('turning all projector', req.body.state);
  if (PROJECTORS.DISABLED) {
    console.log('projector control is disabled by your configuration');
    res.send();
    return;
  }

  // send requests to all projectors
  var tasks = [];
  for (var target in PROJECTORS.TARGETS) {
    tasks.push(turnProjector(PROJECTORS.TARGETS[target], req.body.state));
  }

  // once all requests are successfully completed, resolve
  Promise.all(tasks)
      .then(function() {
        console.log('succcess!');
        res.sendStatus(200);
      })
      .catch(function(err) {
        console.log('promise error', err);
        res.sendStatus(500);
      });

  function turnProjector(target, state) {
    console.log('turnProjector()', target);
    return new Promise(function(resolve, reject) {
      var pj = new Pjlink(target.URL, target.PORT, target.PASSWORD);

      if (state) {
        pj.powerOn(function(err) {
          if (err) {
            console.log('powerOff error ' + target.URL, err);
            reject(err);
          } else {
            console.log('powerOn ok', target.URL);
            resolve();
          }
        });
      } else {
        pj.powerOff(function(err) {
          if (err) {
            console.log('powerOff error ' + target.URL, err);
            reject(err);
          } else {
            console.log('powerOff ok', target.URL);
            resolve();
          }
        });
      }
    });
  }
});

module.exports = router;
