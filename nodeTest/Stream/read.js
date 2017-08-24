/**
 * Created by cljin on 2016/4/1.
 */
/*  stream流,是一个抽象接口.eg,对http服务器发送请求的request对象就是一个stream,还有stdout(标准输出)
 *四种类型:readable writable duplex(可读可写) transform(操作被写入数据,读出结果)
 *   所有stream对象都是EventEmitter的实例.
 *常用事件:data(有可读数据时触发) end(没有更多可读数据时触发) error(在接受和写入的过程中报错时触发) finish(所有数据已被写入到底层系统时候触发).
 *
 * */


var fs=require('fs');
var data='';

var rs=fs.createReadStream('input.xx');
rs.setEncoding('UTF8');
//数据过长时,会分拆多段处理
rs.on('data', function (chunk) {
    data+=chunk;
});
rs.on('end', function () {
    console.log(data);
    console.log('没有更多数据可读');
});
rs.on('finish', function () {
    console.log('所有数据已经写入底层')
});
rs.on('error', function (err) {
    console.log(err.stack)
});
console.log("程序执行完毕");