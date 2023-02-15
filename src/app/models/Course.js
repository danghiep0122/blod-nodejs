const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String, maxLength: 255 },
  desc: { type: String, maxLength: 1000 },
  thumb: { type: String, default: '' },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Course', Course);
