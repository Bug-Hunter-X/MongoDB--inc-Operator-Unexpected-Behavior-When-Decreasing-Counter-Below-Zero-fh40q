```javascript
// Incorrect use of $inc operator in MongoDB update query
db.collection('myCollection').updateOne( { "_id": ObjectId("652187931234567890abcdef") }, { $inc: { "count": -1 } } );
```