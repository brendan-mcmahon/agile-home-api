var express = require('express');
var router = express.Router();
const { getAllHouses, createHouse } = require('../repositories/house-repo');

router.route('').get((req, res) => {
    console.log('getting houses');
    getAllHouses((houses) => res.status(200).json(houses));
});

router.route('').post((req, res) => {
    console.log('creating a new house');
    console.log(req.body);
    createHouse(req.body, (house) => res.status(200).json(house));
});

module.exports = router;