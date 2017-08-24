/**
 * Created by cljin on 2016/3/28.
 */
/*阻塞代码实例
* */
/*var fs=require('fs');
var data=fs.readFileSync('input.txt');
console.log(data.toString());
console.log('执行结束');*/

/*非阻塞代码实例
node.js异步编程使用回调,没有阻塞或等待文件的I/O操作.
* */
var fs=require('fs');
fs.readFile('input.txt', function (err,data) {
    if(err)return console.log(err);
    console.log(data.toString());
})
console.log("程序执行结束!");
/*js 的异步其更多的是为了和界面UI 的分时，所以尽量将任务切割为细粒度的小任务，每次执行完一段小任务只耗费一段足够小的时间然后让出时间给UI，这样UI就不会卡死。如果任务切割得不好，任务段仍然耗时长，那么无论使什么花样，一样卡死UI。因为js的异步实现不了真正并行。*/
//异步编程总结

/*1,回调函数
* f1,f2要安装顺序执行,而f1是一个耗时任务.如果按顺序执行,f1会阻塞程序,则要把f2作为f1的回调函数
* f1:一个耗时的任务
* */
function f1(){
    console.log('f1 run')
}
function f2(f1){
    console.log('f2 run');
    setTimeout(function () {
        f1();
    },1000);
}
function f3(){

}
f2(f1);
f3();

/*2,事件监听
* */

f1.on('done',f2);
function f1(){
    setTimeout(function () {
        // f1的任务代码
        f1.trigger('done');
    })
}
function f2(){
}

/*3,Promises对象
* 异步任务返回Promises对象,含有then方法,指定回调函数
* */
f1().then(f2);
function f1(){
    var dfd= $.Deferred();
    setTimeout(function () {
        // f1的任务代码
        dfd.resolve();
    },500)
    return dfd.promise;
}