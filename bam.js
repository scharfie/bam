var connect = require('connect');
var nack    = require('nack');
var glob    = require('glob');

var port = 7000;
var root = "/sites/";
var pattern = root + "*/config.ru";

var server = connect();

server.use(connect.logger());

glob(pattern, function(error, files) {
  files.forEach(function(file) {
    var appName = file.replace(root, '').split('/')[0];
    var domain = appName + ".*"; 
    console.log("* Serving " + domain + " (" + file + ")");

    var app = connect.vhost(
      domain,
      nack.createServer(file)
    );

    server.use(app);
  });
});

server.listen(port);
