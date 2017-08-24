var http=require('http');
http.createServer(function(request,response){
    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.setHeader('contentType','text/html');
    response.writeHead(200,{'contentType':'text/plain','test':'12344'});
    response.end('Hello World!\n');
}).listen(8124);
console.log('Server running at http://127.0.0.1:8124/');

/*setHeader和writeHead都是设置响应头,不过若有相同属性setHeader会被覆盖.text/plain时,字体颜色会被忽略.
 * */