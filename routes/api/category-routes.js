const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    // be sure to include its associated Products
    include: {
      model: Product,
      attributes: ["id", "product_name", "price", "stock"]
    }
  }).then((categories) => {
    res.json(categories);
  }).catch((err) => res.json(err));
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findOne({
    where: {
      id: req.params.id
    },
    // be sure to include its associated Products
    include: {
      model: Product,
      attributes: ["id", "product_name", "price", "stock"]
    }
  }).then((categories) => {
    res.json(categories);
  }).catch((err) => res.json(err));
});

router.post('/', (req, res) => {
  // create a new category
  Category.create
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy
});

module.exports = router;
