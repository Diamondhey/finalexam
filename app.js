const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.get("/index.html", function (req, res){
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/about.html", function (req, res){
    res.sendFile(path.join(__dirname + "/about.html"));
});

app.get("/style.css", function (req, res){
    res.sendFile(path.join(__dirname + "/style.css"));
});

app.get("/styleAbout.css", function (req, res){
    res.sendFile(path.join(__dirname + "/styleAbout.css"));
});

app.get("/script.js", function (req, res){
    res.sendFile(path.join(__dirname + "/script.js"));
});

app.get("/img/1.jpg", function (req, res){
    res.sendFile(path.join(__dirname + "/img/1.jpg"));
});

app.get("/img/2.jpg", function (req, res){
    res.sendFile(path.join(__dirname + "/img/2.jpg"));
});

app.get("/img/3.jpg", function (req, res){
    res.sendFile(path.join(__dirname + "/img/3.jpg"));
});

app.get("/img/1618864466_k.jpg", function (req, res){
    res.sendFile(path.join(__dirname + "/img/1618864466_k.jpg"));
});

app.get("/img/Coffee_workgroup_461380.jpg", function (req, res){
    res.sendFile(path.join(__dirname + "/img/Coffee_workgroup_461380.jpg"));
});

app.get("/img/Dphoto-1522071820081-009f0129c71c.jpeg", function (req, res){
    res.sendFile(path.join(__dirname + "/img/Dphoto-1522071820081-009f0129c71c.jpeg"));
});

app.get("/img/photo-1578357078586-491adf1aa5ba.jpeg", function (req, res){
    res.sendFile(path.join(__dirname + "/img/photo-1578357078586-491adf1aa5ba.jpeg"));
});

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/about", function (req, res){
    res.sendFile(path.join(__dirname + "/about.html"));
});

app.get("/about/team_photo", function (req, res){
    res.sendFile(path.join(__dirname + "/img/voleibol-foto-17.jpg"));
});

app.get("/video", function (req, res){
    res.redirect("https://www.youtube.com/watch?v=yXS8iNKqsCM&ab_channel=RLFComps");
});

app.listen(port);

console.log("Press Ctrl + C");