const express = require('express'),
      router = express.Router();

const productsController = require('../controllers/products');

router.get('/', productsController.getProducts);

module.exports = router;
