'use strict';

var express = require('express');
var router = express.Router();
var PROJECTORS = require('../projector-config.js');
var Pjlink = require('pjlink');

/* GET state of a projector */
router.get('/projector/:id', function(req, res, next) {
  var target = PROJECTORS.TARGETS[req.params.id];
  var pj = new Pjlink(target.URL, target.PORT, target.PASSWORD);

  // Returns current power state
  pj.getPowerState(function(err, state){
  	if(err){
  		console.log(err);
  		return;
  	}
  	console.log('power', err, state);
    res.send(state);
  });
});

/* POST turn on/off all projectors */
router.post('/projector/all', function(req, res, next) {
  // send requests to all projectors
  var tasks = [];
  for (var target in PROJECTORS.TARGETS) {
    tasks.push(turnProjector(target, req.body.state));
  }

  // once all requests are successfully completed, resolve
  Promise.all(tasks)
      .then(function() {
        console.log('succcess!');
        res.sendStatus(200);
      })
      .catch(function(err) {
        console.log(err);
        res.sendStatus(500);
      });

  function turnProjector(target, state) {
    return new Promise(function(resolve, reject) {
      var pj = new Pjlink(target.URL, target.PORT, target.PASSWORD);

      if (state) {
        pj.powerOn(function(err) {
          if (err) {
            console.log('there was an error', err);
            reject(err);
          }
          console.log('ok', target.URL);
          resolve();
        });
      } else {
        pj.powerOff(function(err) {
          if (err) {
            console.log('there was an error', err);
            reject(err);
          }
          console.log('ok', target.URL);
          resolve();
        });
      }


    });
  }
});

module.exports = router;
