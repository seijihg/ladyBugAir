const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleSchema = new Schema({
  title: {
    type: String,
    required: true,
    lowercase: true
  },
  content: {
    type: String,
    required: true,
    lowercase: true
  },
  img_thumbnail: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
}, {timestamps: true})

module.exports = mongoose.model('Article', articleSchema)