var express = require('express');
var myRouter = express.Router();
var mysql = require('mysql');

var db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'pet'
});

myRouter.route('/getData').get(function (req,res) {
    var sql = 'select * from adv order by adv_id';

    db.query(sql,function (err,data) {
        if (err){
            console.log(err)
            res.send({error:1})
        } else {
            res.send({error:0,data:data})
        }
    })
})

module.exports = myRouter;