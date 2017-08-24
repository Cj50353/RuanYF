/**
 * Created by wb-jcl204971 on 2016/6/24.
 */
/**
 * hello.js
 * */
var name;
exports.setName= function (theName) {
    name=theName;
}
exports.sayHello= function () {
    console.log("hello,"+name);
}

var myHello=require("./hello");
myHello.setName("jim");
myHello.sayHello();


function Hello(){
    var name;
    this.setName= function (theName) {
        name=theName;
    }
    this.sayName= function () {
        console.log("hello,"+name);
    }
}
var myHello=new Hello();
myHello.setName("jim");
myHello.sayHello();

