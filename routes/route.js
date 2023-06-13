import express from "express";

import {
    getAllProducts,
    getProductById,
    updateProduct,
    createProduct,
    deleteProduct
} from "../controller/product.controller.js"

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;
