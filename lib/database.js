const express = require('express');

const router = express.Router();

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/testDB');

const db = mongoose.connection;

db.on('error', () => {
  console.log('connection failed!!');
});

db.once('open', () => {
  console.log('connect!!!');
});

const cafe = new mongoose.Schema({
  title: 'string',
  link: 'string',
  category: 'string',
  description: 'string',
  telephone: 'string',
  address: 'string',
  roadAddress: 'string',
  mapx: 'number',
  mapy: 'number',
});

const Cafe = mongoose.model('Schema', cafe);
// const newCafe = new Cafe({
//   title: '예지카페', link: 'https://www.instagram.com/fear___not/', category: '음식점>카페,디저트', description: '', telephone: '', address: '경기도 수원시 팔달구 인계동 1039', roadAddress: '경기도 수원시 팔달구 인계로124번길 19', mapx: '314253', mapy: '518746',
// });
/* 검색  */
router.get('/find', (req, res) => {
    Cafe.find((err, result) => {
        if (err) {
          console.log(`error :${err}`);
          return;
        }
        console.log(`test : ${result}`);
        res.render('nosql', { data: result });
      });
});

module.exports = router;
