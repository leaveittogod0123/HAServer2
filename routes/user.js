var express = require('express');
var router = express.Router();
var User = require('../models').User;

/* GET users listing. */
router.get('/', function (req, res, next) {
    User.findAll()
        .then((users) => {
            res.send(users);
        })
        .catch(err => {
            next(err);
        })
});

router.get('/:id', function (req, res, next) {
    User.findAll({
        where: {
            id: req.params.id
        }
    }).then((users) => {
        console.log(users[0].dataValues);
        res.send(users[0].dataValues);
    }).catch(err => {
        next(err);
    })
});

router.post('/', (req,res,next)=>{
    let user = req.body;
    User.create(user);
});


module.exports = router;