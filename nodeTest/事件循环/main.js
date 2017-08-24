/**
 * Created by cljin on 2016/3/28.
 */
/**node.js
 *1>是单进程单线程应用,通过事件和回调支持并发,性能高
 *2>每一个API都是异步的,并作为一个独立线程运行,使用异步函数调用,处理并发.
 *3>所有的事件机制都是观察者模式
 *4>单线程类似进入一个while(true)的事件循环，直到没有事件观察者退出，
 * 每个异步事件都生成一个事件观察者，如果有事件发生就调用该回调函数.
 * */
//导入模块
var events=require('events');
var eventEmitter=new events.EventEmitter();

//绑定事件
eventEmitter.on('connection', function () {
    console.log("连接成功");
    // 触发 data_received 事件
    eventEmitter.emit('data_received');
})
eventEmitter.on('data_received', function () {
    console.log('数据接收成功')
})
eventEmitter.emit('connection');
console.log('执行完成');




//event.js 文件
var events = require('events');
var emitter = new events.EventEmitter();
emitter.on('someEvent', function(arg1, arg2) {
    console.log('listener1', arg1, arg2);
});
emitter.on('someEvent', function(arg1, arg2) {
    console.log('listener2', arg1, arg2);
});
emitter.emit('someEvent', 'arg1 参数', 'arg2 参数');
//执行以上代码，运行的结果如下：/p>
//$ node event.js
//listener1 arg1 参数 arg2 参数
//listener2 arg1 参数 arg2 参数