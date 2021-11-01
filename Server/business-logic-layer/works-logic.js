const dal = require("../data-access-layer/dal");
const Work = require("../models/work");
const Category = require("../models/category");

function addWorkAsync(work) {
  return work.save();
}

function getAllWorksAsync() {
  return new Promise((resolve, reject) => {
    Work.find({}, (err, works) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(works);
    });
  });
}

function getOneWorkAsync(_id) {
  return new Promise((resolve, reject) => {
    Work.findOne({ _id }, (err, work) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(work);
    });
  });
}

function updateWorkAsync(work) {
  return new Promise((resolve, reject) => {
    // @ts-ignore
    Work.updateOne({ _id: work._id }, work, (err, info) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(info.n ? work : null); // info.n - מספר המוצרים שנמצאו
    });
  });
}

function deleteWorkAsync(_id) {
  return new Promise((resolve, reject) => {
    Work.deleteOne({ _id }, (err, info) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
}


function getWorksWithCategoryAsync() {
  return Work.find({}).populate("category").exec();
}

function getWorksFromCategoryAsync(id) {
  return Work.find({ categoryId: id }).populate("category").exec();
}
function getCategoriesWithWorksAsync() {
  return Category.find({}).populate("works").exec();
}
function getWorksFromTagAsync(tag) {
  
  return Work.find({ workTags: tag }).populate("category").exec();
}


module.exports = {
  addWorkAsync,
  getAllWorksAsync,
  getOneWorkAsync,
  updateWorkAsync,
  deleteWorkAsync,
  getWorksFromCategoryAsync,
  getWorksWithCategoryAsync,
  getCategoriesWithWorksAsync,
  getWorksFromTagAsync
};
