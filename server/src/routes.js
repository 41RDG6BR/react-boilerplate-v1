const express = require('express');
const jwt = require('jsonwebtoken');

// const authMiddleware = require('./auth');
const CrudControlller = require('./controllers/crud');

const crudControlller = new CrudControlller()

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
// router.use(authMiddleware);

router.get('/users', async (req, res) => {
    // const Customer = db.Mongoose.model('customers', db.CustomerSchema, 'customers');
    // Customer.find({}).lean().exec(function(e, docs){
    //   res.json(docs);
    //   res.end();
    // })
    // const users = require('./data/user')
    const listUsers = await crudControlller.list()
    res.json(listUsers);
    res.end();
});
router.post('/users', async (req, res) => {
  const data = req.body
  console.log('data', data)
  const createResult = await crudControlller.create(data)
  res.json(createResult);
  res.end();
});
module.exports = router;
