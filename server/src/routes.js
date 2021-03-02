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
  return res.json([
    {
      id: 1,
      name: 'Rodrigo Nogueira',
      website: 'https://homeacademy.com.br',
    },
    {
      id: 2,
      name: 'Mark Zuckerberg',
      website: 'https://facebook.com',
    },
    {
      id: 3,
      name: 'Bill Gates',
      website: 'https://www.microsoft.com',
    },
    {
    id: 4,
    address: {
      country: 'USA',
      state: 'Texas',
      city: 'Dallas',
      street: '75247'
    },
    avatarUrl: '/static/images/avatars/avatar_6.png',
    createdAt: 1554757200000,
    email: 'clarke.gillebert@devias.io',
    name: 'Clarke Gillebert',
    phone: '972-333-4106'
    },
  ]);
});

router.post('/users', async (req, res) => {
  console.log('Hi')
});

module.exports = router;
