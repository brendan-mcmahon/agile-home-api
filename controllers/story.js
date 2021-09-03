var express = require('express');
var router = express.Router();
const { createNewItem, getBacklog } = require('../repositories/story-repo');

router.route('/:houseId').get((req, res) => {
    console.log(`getting backlog for house ${req.params.houseId}`);
    getBacklog(req.params.houseId, (backlog) => res.status(200).json(backlog));
});

router.route('').post((req, res) => {
    console.log('creating a new story');
    console.log(req.body);
    createNewItem(req.body, (story) => res.status(200).json(story));
});

module.exports = router;