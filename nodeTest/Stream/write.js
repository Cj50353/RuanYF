/**
 * Created by cljin on 2016/4/1.
 */



var fs=require('fs');
var data='读入';
var ws=fs.createWriteStream('output.xx');
ws.write(data,'UTF8');
ws.end();
ws.on('finish', function () {
    console.log('写入完全');
});
ws.on('error', function (err) {
    console.log(err.stack);
})
console.log('写入程序执行完毕')
