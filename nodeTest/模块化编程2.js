/**
 * Created by cljin on 2016/3/28.
 */
/*浏览器环境:客户端模块编程commonJs规范不适用于浏览器环境,因为服务端的所有代码放在本地硬盘,可以同步加载,等待时间取决于硬盘读取时间;
 *但是对于浏览器等待时间取决于网速快慢,如果过长,浏览器会处于"假死"状态.因此浏览器端的模块要使用异步加载.*/
var math = require('math');
/*math加载过长,下面方法不会执行*/
math.add(2, 3);


/*AMD:"Asynchronous Module Definition"的缩写，意思就是"异步模块定义"*/
require([module],callback);

require(['math'], function (math) {
    math.add(2, 3);
});

/*注入模块math,当参数给回调函数*/

