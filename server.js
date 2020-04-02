const express = require('express');

const path = require('path');

const app = express();

app.use(express.static(__dirname + '/wbdv-sp20-archana-ajith-client-angular'));

app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname+

    '/wbdv-sp20-archana-ajith-client-angular/index.html'));});

app.listen(process.env.PORT || 8080);
