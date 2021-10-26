const dal = require("../data-access-layer/dal");
const Work = require("../models/work");

dal.connectAsync()
    .then(db => console.log("We're connected to " + db.name + " on MongoDB."))
    .catch(err => console.log(err));

function addWorkAsync(work) {
    return work.save();
}

function getAllWorksAsync() {
    return new Promise((resolve, reject) => {
        Work.find({}, (err, works) => { // {} = החזר את כל המוצרים
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

// Comparison Query Operators: 
// $gt  - Greater Than...
// $gte - Greater Than or Equal
// $lt  - Less Than
// $lte - Less Than or Equal
// $eq  - Equal
// $ne  - Not Equal
// $in  - In
// $nin - Not In

function getWorksByPriceRangeAsync(minPrice, maxPrice) {
    return new Promise((resolve, reject) => {
        Work.find({ price: { $gte: minPrice, $lte: maxPrice } }, (err, works)=>{
            if(err) {
                reject(err);
                return;
            }
            resolve(works);
        });
    });
}

module.exports = {
    addWorkAsync,
    getAllWorksAsync,
    getOneWorkAsync,
    updateWorkAsync,
    deleteWorkAsync,
    getWorksByPriceRangeAsync
};