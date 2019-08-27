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
        res.send(users);
    }).catch(err => {
        next(err);
    })
});