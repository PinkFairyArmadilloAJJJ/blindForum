const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://codesmithconnected:fLat$hAck!geneRal9@cluster0.1qxkl.mongodb.net/codesmithconnected?retryWrites=true&w=majority';
mongoose.connect(MONGO_URI);


const Schema = mongoose.Schema;

const sessionSchema = new Schema({
  cookieId: { type: String, required: true, unique: true },
  createdAt: { type: Date, expires: 30, default: Date.now }
});
      
module.exports = mongoose.model('Session', sessionSchema);