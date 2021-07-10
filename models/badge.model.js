const mongoose = require('mongoose')
const { Schema } = mongoose

const BadgeSchema = new Schema({
  // data users can add
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  jobTitle: { type: String, required: true },
  twitter: { type: String, required: true },
  avatarUrl: { type: String, required: true }
})

// replace _id with id and remove _ from other fields
BadgeSchema.set('toJSON', {
  transform: function (doc, ret) {
    ret.id = ret._id
    delete ret._id
    delete ret.__v
  }
})

module.exports = mongoose.model('Badge', BadgeSchema)
