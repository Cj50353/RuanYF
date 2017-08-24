/**
 * Created by cljin on 2016/4/1.
 */
/*
*Node.js 提供了exports 和 require 两个对象，其中 exports 是模块公开的接口，
*require 用于从外部获取一个模块的接口，即所获取模块的 exports 对象。
*
*当想要让模块导入一个对象的时候,exports module.exports都可以;
*当要导入一个非对象接口的时候,要用module.exports.
* */
var hello=require('./hello');
/*
hello.sayHello();*/

console.log(hello.toString());
hello.hello()
