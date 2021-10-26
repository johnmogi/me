const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    name: String,
    price: Number,
    stock: Number,
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    }
}, { 
    versionKey: false,
    toJSON: { virtuals: true },
    id: false
});

ProductSchema.virtual("category", { // category = name of the virtual field.
    ref: "Category", // Model of the joined collection
    localField: "categoryId", // Name of the local field to join.
    foreignField: "_id", // Name of the remote field to join,
    justOne: true // Create an object and not an array
});

const Product = mongoose.model("Product", ProductSchema, "products");

module.exports = Product;
