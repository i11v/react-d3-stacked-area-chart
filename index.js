'use strict';

var fs = require('fs')
  , express = require('express')
  , app = express()
  , campaignData;

fs.readFile(__dirname + '/data.json', 'utf8', function (err, data) {
  if (err) {
    console.error(err);
    return;
  }

  campaignData = JSON.parse(data);
});

app.use(express.static('./dist'));
app.use('/app', express.static('./app'));
app.use('/vendor', express.static('./vendor'));

app.get('/data', function (req, res) {
  res.send(campaignData);
});

var port = process.env.PORT || 8080;

app.listen(port);

console.log('Running server on port ' + port + ', press Ctrl + C to stop');
