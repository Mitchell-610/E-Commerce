// routes/productTagRoutes.js
const express = require('express');
const router = express.Router();
const { ProductTag } = require('../../models');

// POST route to create a new product-tag association
router.post('/', async (req, res) => {
  try {
    const { product_id, tag_id } = req.body;

    // Ensure product_id and tag_id are provided
    if (!product_id || !tag_id) {
      return res.status(400).json({ message: 'Product ID and Tag ID are required' });
    }
 
    // Create the association in the ProductTag model
    const newProductTag = await ProductTag.create({ product_id, tag_id });

    res.status(201).json(newProductTag);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while creating the association' });
  }
});

module.exports = router;
