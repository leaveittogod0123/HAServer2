const express = require('express');
const url = require('url');
const querystring = require('querystring');
const router = express.Router();
const Todo = require('../models').Todo;
const User = require('../models').User;

router.get('/', function (req, res, next) {

    // /todos로 오거나
    // /todos?query1=value1&.. 이 오는데 이걸 나누는 방법을 모르겠다.
    // 일단 if문으로

    const parsedUrl = url.parse(req.url);
    const query = querystring.parse(parsedUrl.query);

    console.log(query);

    if(Object.keys(query).length){
        Todo.findAll({
            include: [{
                model: User,
                where: {
                    id: query.userId
                }
            }]
        })
            .then((users) => {
                console.log(users);
                res.send(users);
            })
            .catch(err => {
                next(err);
            })
    }else{
        Todo.findAll()
            .then((users) => {
                res.send(users);
            })
            .catch(err => {
                next(err);
            })
    }

});

router.get('/:id', function (req, res, next) {
    Todo.findAll({
        where: {
            id: req.params.id
        }
    }).then((users) => {
        res.send(users);
    }).catch(err => {
        next(err);
    })
});

//korean.json todos json 데이터를 그대로 mysql db에 넣어버리기.
router.post('/Update', async function (req, res, next) {
    let todos = req.body;
    console.log(todos);
    const promiese = todos.map( (todo)=>{
        return Todo.create(todo);
    });

    await Promise.all(promiese);

});

module.exports = router;