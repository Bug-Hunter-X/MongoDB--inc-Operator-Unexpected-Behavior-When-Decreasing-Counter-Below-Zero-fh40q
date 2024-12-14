```javascript
// Correct use of $inc operator with conditional check
db.collection('myCollection').updateOne( { "_id": ObjectId("652187931234567890abcdef"), "count": { $gt: 0 } }, { $inc: { "count": -1 } } );
```