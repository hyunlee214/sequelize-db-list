'use strict';

const express = require('express');
const router = express.Router();

router.post('/', (req, res, next) => {
  console.log(req.body);
  console.log(req.body.username);
  console.log(req.body.password);
});

module.exports = router;