const router = require('express').Router();
const apiRoutes = require('./api');
const tagRoutes = require('./tag-routes')
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
router.use('/api', apiRoutes);

// router.use((req, res) => {
//   res.send("<h1>Wrong Route!</h1>")
// });
router.use('/tag', tagRoutes);
router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);

module.exports = router;  