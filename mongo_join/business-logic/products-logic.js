const Product = require("../models/product");
const Category = require("../models/category");

function getAllProductsAsync() {
    return new Promise((resolve, reject) => {
        Product.find({}, (err, products) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(products);
        });
    });
}

function getOneProductAsync(_id) {
    return new Promise((resolve, reject) => {
        Product.findOne({ _id }, (err, product) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(product);
        });
    });
}

function addProductAsync(product) {
    return product.save();
}

function updateProductAsync(product) {
    return new Promise((resolve, reject) => {
        Product.updateOne({ _id: product._id }, product, (err, info) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(info.n ? product : null);
        });
    });
}

function deleteProductAsync(_id) {
    return new Promise((resolve, reject) => {
        Product.deleteOne({ _id }, (err, info) => {
            if (err) {
                reject(err);
                return;
            }
            resolve();
        });
    });
}

function getProductsWithCategoryAsync() {
    return Product.find({}).populate("category").exec();
}

function getCategoriesWithProductsAsync() {
    return Category.find({}).populate("products").exec();
}

module.exports = {
    getAllProductsAsync,
    getOneProductAsync,
    addProductAsync,
    updateProductAsync,
    deleteProductAsync,
    getProductsWithCategoryAsync,
    getCategoriesWithProductsAsync
};

