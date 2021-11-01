trying to design a new site...

the backend will consist of mongo server
frontend will be nextJs with styled components

 <!-- mongosh mongodb://localhost:27017/workFolio
MongoNetworkError: connect ECONNREFUSED 127.0.0.1:28015
(install mongodb - https://www.mongodb.com/try/download/community)
{run mongo in the bg} -->
mongosh
https://www.mongodb.com/developer/quickstart/cheat-sheet/


the database:

workFolio database:

db.work.insertOne({name: "test"})

works collection
_id
workCat - join
workName
workDescription
workThumb
workMainImage
workGallery : {[1,2]}
workDate
workTags 

workCats collection
_id
workCatName

workTags collection
_id
workTagName

users collection
_id
userName
password
isAdmin

leads collection
_id
leadName
leadPhone
leadMail
sentFromPage


{   
"workName": "Emesh Nadlan",
"categoryId":  "617fa63b5730b2289878ccc0" , 
"workDescription": "rolex inspired real estate site",
"workImage": "emesh-th.jpg",
"workGallery": ["emesh.jpg"],
"workTags":  ["elementor"]
"date": "12-12-2020"
}


{   
    "workName" : "Emesh Nadlan",
    "workCat" : "Elementor",
    "workDescription" : "rolex inspired real estate site",
    "workThumb" : "emesh-th.jpg",
    "workMainImage" :  "String",
    "workGallery" : ["emesh.jpg"],
    "workDate" : "12-12-2020",
    "workTags"  : ["elementor"]
}
create a tag model.
