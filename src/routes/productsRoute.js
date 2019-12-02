const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/products', function (req, res) {
	console.log('Entering into route /products');
    
    var responseObject = {}
    responseObject.products = [{
                "sku": "3789",
                "upc": "8765",
                "title": "Jeans"
              }
            ]

    
    res.send(responseObject);
});

module.exports = router;
