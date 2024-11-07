const express = require('express');
var router = express.Router();

router.get('/', (req,res) => {
    res.send('day la get');
})
router.post('/', (req,res) => {
    res.send('day la post');
})

module.exports = router;