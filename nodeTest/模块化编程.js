/**
 * Created by cljin on 2016/3/28.
 */
/**
 * 模块化编程
 *
 * */

/*一般写法:'污染'了全局变量,模块成员看不出直接关系*/
function fn1() {
    //..
}
function fn2() {
    //..
}

/*对象写法:解决了上述缺点,但是模块成员仍然会被暴露.修改 module.m1=xx;*/
var module1=new Object({
    _count:0,
    m1: function () {
        //..
    },
    m2: function () {
        //..
    }
});

/*立即执行函数写法:js模块基本写法*/
var module1 = (function () {
    var _count = 0;
    var m1 = function () {
        //..
    };
    var m2 = function () {
        //..
    };
    return {
        m1: m1,
        m2: m2
    };
})()

/*放大模式:一个模块需要继承另一个的时候*/
var module1=(function (mod) {
    mod.m3= function () {
        //..
    };
    return mod;
})(module1);
/*当在浏览器环境中，模块的各个部分通常都是从网上获取的，
 有时无法知道哪个部分会先加载。如果采用上一节的写法，第
 一个执行的部分有可能加载一个不存在空对象，这时就要采用
 "宽放大模式"。就是参数可以为空对象*/
var module1 = ( function (mod){
    //...
    return mod;
})(window.module1 || {});

/*输入全局变量:为了在模块内部调用全局变量，必须显式地将其他变量输入模块。*/
var module1 = (function ($, YAHOO) {
    //...
})(jQuery, YAHOO);
/*tip:*/