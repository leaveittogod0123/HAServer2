const express = require('express');
const cors = require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/user');
var sequelize = require('./models').sequelize;

const app = express();
const PORT = process.env.NODE_ENV === 'production' ? 3001: 3002
sequelize.sync();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/users', usersRouter);


// 404 처리 미들웨어
app.use(function(req, res, next) {
    next(createError(404));
});

// 에러 핸들러
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


app.listen(PORT,()=>{
    console.log(`server listen on ${PORT}`)
})

module.exports = app;