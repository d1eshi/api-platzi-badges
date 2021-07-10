const express = require('express');
const route = express.Router();

const badge_controller = require('../controllers/badge.controller');

route.get('/', (req, res) => {
  res.send('<h1>Welcome to API Platzi Badges</h1>')
})

// post /badges/create
route.post('/badges/create', badge_controller.badge_create);

// get all badges /badges
route.get('/badges', badge_controller.badge_get_all);

// get badge by id /badges/:id
route.get('/badges/:id', badge_controller.badge_get_by_id);

// update badge by id /badges/:id
route.put('/badges/:id', badge_controller.badge_update);

// delete badge by id /badges/:id
route.delete('/badges/:id', badge_controller.badge_delete);

module.exports = route
