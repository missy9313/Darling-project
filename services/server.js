var express=require("express");
var url=require("url");
var app=express();

app.use(express.static("src"));

var server=app.listen(3000,function () {
    console.log("服务已经启动");
});