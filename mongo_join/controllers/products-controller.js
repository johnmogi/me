const express = require("express");
const Product = require("../models/product");
const productsLogic = require("../business-logic/products-logic");
const router = express.Router();

router.get("/", async (request, response) => {
    try {
        const products = await productsLogic.getAllProductsAsync();
        response.json(products);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

router.get("/:_id", async (request, response) => {
    try {
        const product = await productsLogic.getOneProductAsync(request.params._id);
        if(!product) {
            response.sendStatus(404);
            return;
        }
        response.json(product);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

router.post("/", async (request, response) => {
    try {
        const product = new Product(request.body);
        const addedProduct = await productsLogic.addProductAsync(product);
        response.json(addedProduct);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

router.put("/:_id", async (request, response) => {
    try {
        const product = new Product(request.body);
        product._id = request.params._id;
        const updatedProduct = await productsLogic.updateProductAsync(product);
        if(!updatedProduct) {
            response.sendStatus(404);
            return;
        }
        response.json(updatedProduct);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

router.patch("/:_id", async (request, response) => {
    try {
        const product = new Product(request.body);
        product._id = request.params._id;
        const updatedProduct = await productsLogic.updateProductAsync(product);
        if(!updatedProduct) {
            response.sendStatus(404);
            return;
        }
        response.json(updatedProduct);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

router.delete("/:_id", async (request, response) => {
    try {
        await productsLogic.deleteProductAsync(request.params._id);
        response.sendStatus(204);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

router.get("/join/products-with-category", async (request, response) => {
    try {
        const products = await productsLogic.getProductsWithCategoryAsync();
        response.json(products);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

router.get("/join/categories-with-products", async (request, response) => {
    try {
        const categories = await productsLogic.getCategoriesWithProductsAsync();
        response.json(categories);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

module.exports = router;

