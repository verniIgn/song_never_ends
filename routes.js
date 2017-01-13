
"use strict";

var express = require('express');
var router = express.Router();

//this is for the landing page
router.get('/', function(req, res, next) {
  res.render('index',
  { title: 'Home',
    image: "../images/lambchop1.jpg",
    lyric: "This is the song that never ends",
    nextPage: "/verse-2"
  });
});
  //now build route for verse2
  router.get('/verse-2', function(req, res, next) {
    res.render('index',
    { title: 'Verse Two',
      image: "../images/lambchop2.jpg",
      lyric: "It just goes on and on my friends",
      nextPage: "/verse-3"
    });
  });
  //verse3
  router.get('/verse-3', function(req, res, next) {
    res.render('index',
    { title: 'Verse Three',
      image: "../images/lambchop3.jpg",
      lyric: "Some people started singing it not knowing what it was",
      nextPage: "/verse-4"
    });
  });
  //verse4
  router.get('/verse-4', function(req, res, next) {
    res.render('index',
    { title: 'Verse Four',
      image: "../images/lambchop4.jpg",
      lyric: "And theyll continue singing it forevor just because...",
      nextPage: "/"
    });
  });

module.exports = router;

