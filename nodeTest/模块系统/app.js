/**
 * Created by cljin on 2016/4/6.
 */
var http=require('http');

http.createServer(function(rq,rs){
    rs.setHeader('xxx','123');
    rs.writeHead(200,'OK',{'contentType':'text/plain'});
    rs.end('hello');
}).listen(1111);
console.log('run');