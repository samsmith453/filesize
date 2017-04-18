var express = require("express");
var app = express();
var multer = require("multer");
var upload = multer({dest: "uploads/"});

app.get("/", function(req, res){
     res.sendFile(__dirname + "/public/index.html");
});

app.post("/", upload.single('file'), function(req, res){
     res.send({"size": req.file.size});
});

var server = app.listen(process.env.PORT);
