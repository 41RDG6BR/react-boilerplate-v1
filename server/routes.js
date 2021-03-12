const express = require('express');
const jwt = require('jsonwebtoken');
const path = require("path");
const multer = require("multer");
const authMiddleware = require('./auth');
const CrudControlller = require('./controllers/crud');

const crudControlller = new CrudControlller()

const router = express.Router();

// const storage = multer.diskStorage({
//   destination: "./public/",
//   filename: function(req, file, cb){
//      cb(null,"IMAGE-" + Date.now() + path.extname(file.originalname));
//   }
// });

// const upload = multer({
//   storage: storage,
//   limits:{fileSize: 1000000},
// }).single("myfile");

// const obj =(req,res) => {
//   console.log("nigga")
//   upload(req, res, () => {
//      console.log("Request ---", req.body);
//      console.log("Request file ---", req.file);//Here you get file.
//      const file = new File();
//      file.meta_data = req.file;
//      file.save().then(()=>{
//      res.send({message:"uploaded successfully"})
//      })
//      /*Now do where ever you want to do*/
//   });
// }

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
