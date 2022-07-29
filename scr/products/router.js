const router = require('express').Router();
const ProductConn = require('./controller');

router.route('/')
    .get(ProductConn.getAll)
    .post(ProductConn.createProduct);
    
router.route('/:id')
    .get(ProductConn.getId)
    .put(ProductConn.updateProduct)
    .delete(ProductConn.deleteProduct);

module.exports = router;