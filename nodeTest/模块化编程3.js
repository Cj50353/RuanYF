/**
 * Created by cljin on 2016/3/28.
 */
/*产生环境:1>加载多个文件的时候:浏览器停止网页渲染,网页失去响应;2>在js文件存在依赖的时候,必须保证加载顺序
 * require.js诞生:1>实现js异步加载,避免网页失去响应.2>管理模块之间的依赖性,便于代码的编写和维护
 *async属性表示异步加载,IE不支持,只支持defer
 * // eg: <script src="js/require.js" defer async='true'></script>
 *
 *data-main属性的作用是，指定网页程序的主模块.后缀js省略
 * // eg:<script src="js/require.js" data-main="js/main"></script>
 *
 * */
// main.js
require(['moduleA', 'moduleB', 'moduleC'], function (moduleA, moduleB, moduleC){
    // some code here
});
/*以上表示模块main依赖moduleA, moduleB, moduleC*/
/*以下为配置*/

require.config({
    paths: {
        "jquery": "jquery.min",
        "underscore": "underscore.min",
        "backbone": "backbone.min"
    }
});
//若不在同一路径下面,一种方式加上"jquery": "lib/jquery.min",另一种使用baseUrl改变基目录
require.config({
    baseUrl:'js/lib',
    paths: {
        "jquery": "jquery.min",
        "underscore": "underscore.min",
        "backbone": "backbone.min"
    }
});

/**加载AMD模块写法
 * */
//定义模块
// math.js
define(function (){
    var add = function (x,y){
        return x+y;
    };
    return {
        add: add
    };
});
/*当math.js还依赖其他模块的时候,第一个参数以数组的形式导入*/
define(['myLib'], function(myLib){
    function foo(){
        myLib.doSomething();
    }
    return {
        foo : foo
    };
});


//加载方法
// main.js
require(['math'], function (math){
    alert(math.add(1,1));
});



/* 非规范模块写法:在使用require加载之前使用config方法,定义特性
 * shim属性,专门配置不兼容的模块.
 * （1）exports值（输出的变量名），表明这个模块外部调用时的名称；
 * （2）deps数组，表明该模块的依赖性。
 * */
require.config({
    shim: {
        'underscore':{
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }
});
