const mongoose = require("mongoose");

const WorkSchema = new mongoose.Schema({
    name: String,
    workCat : [],
    workName : String,
    workDescription : String,
    workThumb : String,
    workMainImage : String,
    workGallery :  String,
    workDate : String,
    workTags  : String
}, { versionKey: false }); // versionKey: false - לא להוסיף פרמטר נוסף עבור גרסה

// Create a Work Model: 
const Work = mongoose.model("Work", WorkSchema, "works"); // Model Name, Schema, Collection

module.exports = Work;
