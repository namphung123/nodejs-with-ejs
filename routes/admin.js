const express = require('express');

const router = express.Router();

const product = []

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.render('add-product',{pageTitle: 'Add Product',path: '/admin/add-product'})
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  product.push({title: req.body.title})
  res.redirect('/');
});

exports.router = router;
exports.product = product
