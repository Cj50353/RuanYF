/**
 * Created by wb-jcl204971 on 2016/12/1.
 */
//let a=[1,2,3];
alert(a);
var  app={
    init:function(){
      this.bind();
    },
    num:0,
    name:"123",
    age:"24",
    getName:function(){
        return this.name;
    },
    bind:function () {
        $("body").delegate("#test","click", function (e) {
            alert(this);
            //alert("this.getName()"+this.getName());//==>这里的this 是调用的dom对象
            //alert("app.getName()"+app.getName());
            app.getName()
            //alert("app.num:"+app.num);
        })
    }
}
app.init();
