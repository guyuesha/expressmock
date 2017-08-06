var express = require('express');
var app = express();
var detail = require('./api/apiDetail');
var list = require('./api/apiList');
var APIs = [
    { url: '/api/detail', moduleName: 'apiDetail' },
    { url: '/api/list', moduleName: 'apiList' },
];
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    res.header("Cache-Control", "no-cache, no-store, must-revalidate"); // HTTP 1.1.
    res.header("Pragma", "no-cache"); // HTTP 1.0.
    res.header("Expires", "0"); // Proxies.
    next();
});
app.use('/api/detail', function(req, res, next) {
    res.json(detail);
});
app.use('/api/list', function(req, res, next) {
    res.json(list);
});
// for (var i = 0; i < APIs.length; i++) {
//     var item = APIs[i];
//     var result = require('./api/' + item.moduleName);
//     app.use(item.url, function(req, res, next) {
//         res.json(result);
//     })
// }
var server = app.listen(8001, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});