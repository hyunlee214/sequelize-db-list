'use strict';

const express = require('express');
const router = express.Router();
const Member = require('../models/member');

router.post('/', async (req, res, next) => {
  console.log(req.body);
  console.log(req.body.username);
  console.log(req.body.password);

    try { 
    const result = await Member.create({
      username: req.body.username,
      password: req.body.password
    });
    console.log(result);

    if (result) {
      console.log('success');
      res.json({
        status : 200
      });

  // const result = await Member.create({
  //   username: req.body.username,
  //   password: req.body.password
  // });

  // console.log(result);
  try { 
    const result = await Member.create({
      username: req.body.username,
      password: req.body.password
    });
    console.log(result);

    if (result) {
      console.log('success');
      res.json({
        status : 200
      }); 
    }
  }


module.exports = router;