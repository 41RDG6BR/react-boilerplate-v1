const express = require('express');
const jwt = require('jsonwebtoken');

const authMiddleware = require('./auth');

const router = express.Router();

router.post('/authenticate', (req, res) => {
  const user = {
    id: 1,
    name: 'Rodrigo Nogueira',
    company: 'Dev',
    website: 'https://homeacademy.com.br',
  };

  return res.json({
    user,
    token: jwt.sign(user, 'PRIVATEKEY'),
  });
});

/**
 * Private route
 */
router.use(authMiddleware);

router.get('/users', async (req, res) => {
    const db = require('../db');
    const Customer = db.Mongoose.model('customers', db.CustomerSchema, 'customers');
    Customer.find({}).lean().exec(function(e, docs){
      res.json(docs);
      res.end();
    })
});

module.exports = router;
