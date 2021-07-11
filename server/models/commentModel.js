const mongoose = require('mongoose');

// this string was changed slightly to work earlier.  Have pasted it with the working string
const MONGO_URI =
  'mongodb+srv://codesmithconnected:fLat$hAck!geneRal9@cluster0.1qxkl.mongodb.net/comment?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI);

// eslint-disable-next-line prefer-destructuring
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  commentId: { type: Number, required: true, unique: true },
  contents: { type: String },
  metadata: {
    userId: { type: Number, required: true },
    timestamp: { type: Date },
  },
  votes: {
    netVotes: { type: Number },
    upvotes: { type: Number },
    downvotes: { type: Number },
  },
  depthLevel: { type: Number },
  // children: [commentSchema],
});

module.exports = mongoose.model('Comment', commentSchema);
