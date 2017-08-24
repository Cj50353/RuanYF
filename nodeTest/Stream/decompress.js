/**
 * Created by cljin on 2016/4/1.
 */
var fs = require("fs");
var zlib = require('zlib');

// 解压 input.txt.gz 文件为 input.txt
fs.createReadStream('input.xx.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('input1.xx'));

console.log("文件解压完成。");