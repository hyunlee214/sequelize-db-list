'use strict';

const express = require('express');
const router = express.Router();
const Member = require('../models/member');

router.post('/', async (req, res, next) => {
  console.log(req.body);
  console.log(req.body.userName);
  console.log(req.body.password);

  const result = await Member.create({
    userName: req.body.userName,
    password: req.body.password
  });

  console.log(result);
});

module.exports = router;