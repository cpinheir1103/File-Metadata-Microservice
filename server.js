var express = require('express');
var multer  = require('multer')
var app = express()
var upload = multer({ dest: 'upload/' })

var retObj = { "filesize":null };
 
app.use(express.static('public'));

function sendFile(res) {
  res.sendFile(__dirname + '/views/index.html');
}

app.get("/", function (req, res) {
  sendFile(res)
});

app.post('/get-fsize', upload.single('file'), function (req, res, next) {
  var params = req.params; 
  var fsize = req.file.size;
  
  retObj.filesize = fsize; 
  res.json(retObj);
})

app.listen(8080);