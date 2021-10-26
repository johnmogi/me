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
    "name": "String",
    "workCat" : [],
    "workName" : "String",
    workDescription : "String",
    workThumb : "String",
    "workMainImage" : "String",
    "workGallery" :  "String",
    "workDate" : "String",
    "workTags"  : "String"
}
