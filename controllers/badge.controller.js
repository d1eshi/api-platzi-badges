const Badge = require('../models/badge.model')
const md5 = require('md5')

// add route to create a badge
exports.badge_create = (req, res, next) => {
  const badge = new Badge({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    jobTitle: req.body.jobTitle,
    twitter: req.body.twitter,
    avatarUrl: `https://www.gravatar.com/avatar/${md5(req.body.email)}?d=identicon`,
  })

  // save badge with handle error
  badge.save((err) => {
    if (err) {
      return next(err)
    }
    res.send('Badge created successfully!')
  })
}

// add route to get all badgess
exports.badge_get_all = (req, res) => {
  Badge.find({}, (err, badge) => {
    if (err) return next(err)
    res.json(badge)
  })
}

// add route to get badge by id
exports.badge_get_by_id = (req, res) => {
  Badge.findById(req.params.id, (err, badge) => {
    if (err) return next(err)
    res.json(badge)
  })
}

// update badge
exports.badge_update = (req, res, next) => {
  Badge.findByIdAndUpdate(req.params.id, req.body, (err, badge) => {
    if (err) return next(err)
    res.json(badge)
  })
}

// delete badge
exports.badge_delete = (req, res, next) => {
  Badge.findByIdAndRemove(req.params.id, (err, badge) => {
    if (err) return next(err)
    res.json(badge)
  })
}