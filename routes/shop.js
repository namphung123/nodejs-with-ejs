const express = require('express');

const router = express.Router();

const adminData = require('./admin')

router.get('/', (req, res, next) => {
  res.render('shop',{prods: adminData.product,pageTitle: 'My Shop',path: '/'})
});

module.exports = router;
