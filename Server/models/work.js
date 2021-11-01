const mongoose = require("mongoose");

const WorkSchema = new mongoose.Schema({
  workName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true
  },
  workDescription: {
    type: String,
    required: true,
  },
  workImage: {
    type: String,
    required: true
  },
  workGallery: {
    type: Array,
    required: true
  },
  workTags: {
    type: Array,
    required: true
  },
  date: {
    type: String,
    required: true
  }
}, {
  versionKey: false,
  toJSON: { virtuals: true },
  id: false
});


WorkSchema.virtual("category", {
  // category = name of the virtual field.
  ref: "Category", // Model of the joined collection
  localField: "categoryId", // Name of the local field to join.
  foreignField: "_id", // Name of the remote field to join,
  justOne: true, // Create an object and not an array
});

const Work = mongoose.model("Work", WorkSchema);

module.exports = Work;
