var express=require('express');
//引入图标
var favicon=require('serve-favicon');
//引入post
var bodyParser=require('body-parser');
//引入ejs
var ejs=require('ejs');
//引入路由
var customerRouter=require('./public/routers/customerRouter');
//创建服务
var server=express();
//配置浏览器访问的静态文件目录
server.use(express.static(__dirname+'/public'));
//使用图标模块
server.use(favicon(__dirname+'/public/logo.ico'));
//配置ejs
server.set('views',__dirname+'/public/pages');
server.engine('html',ejs.__express);
server.set('view engine','html');
//配置post
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
//设置路由
server.use(customerRouter);
server.get("/nav",function(req,res){
    res.render("nav");
});
server.get("/login",function(req,res){
    res.render("login");
});
server.get("/ordermangement",function(req,res){
    res.render("ordermangement");
});
server.get("/adv",function(req,res){
    res.render("adv");
});
server.get("/customer",function(req,res){
    res.render("customer");
});
server.get("/ordermangement",function(req,res){
    res.render("ordermangement");
});
server.get("/ordermangementdetails",function(req,res){
    res.render("ordermangementdetails");
});
server.get("/commodity",function(req,res){
    res.render("commodity");
});
//给服务配置端口号
server.listen(894);