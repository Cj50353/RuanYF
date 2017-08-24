/**
 * Created by cljin on 2016/4/1.
 */
/*在处理TCP流和文件流的时候必须使用二进制数据,buffer类是用来专门储存二进制数据的缓存区.
* 创建
* new Buffer(10)   //长度为10字节
* new Buffer([10,1,2]) //通过数组创建
* new Buffer('10','utf-8') //通过字符串创建
*
* 写入
* buf.write()
* buf.write(string[, offset[, length]][, encoding])
*   offset - 缓冲区开始写入的索引值，默认为 0 。
*   length - 写入的字节数，默认为 buffer.length .
*
*读取
*buf.toString
*buf.toString([encoding[, start[, end]]])
*
*转换
* toJSON
*
*合并
*Buffer.concat(list[, totalLength])
*   list - 用于合并的 Buffer 对象数组列表。
*   totalLength - 指定合并后Buffer对象的总长度。
*
*拷贝
*buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])
*
*裁剪
*buf.slice([start[, end]])
* */




buf = new Buffer(26);
/*for (var i = 0 ; i < 26 ; i++) {
    buf[i] = i + 97;
}*/
console.log( buf.write('ascii',1));