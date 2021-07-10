const mongoose = require('mongoose');

//this string was changed slightly to work earlier.  Have pasted it with the working string
const MONGO_URI = 'mongodb+srv://codesmithconnected:fLat$hAck!geneRal9@cluster0.1qxkl.mongodb.net/codesmithconnected?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'codesmithconnected'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));


const Schema = mongoose.Schema;


const commentSchema = new Schema({
	commentId : {type: Number, required: true, unique: true},
	contents : {type: String},
	metadata: {
	     userId : {type: Number, required: true},
	     timestamp : {type: Date}
	},
	votes: {
	    netVotes : {type: Number},
	    upvotes : {type: Number},
	    downvotes : {type: Number}
	},
	depthLevel: {type: Number},
	children: [commentSchema],
});

module.exports = mongoose.model('Comment', commentSchema);