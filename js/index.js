let i, num=0, q, a=0, result=0, connectedDate,prev_time=0,time=0;

window.onload = function(){
    connectedDate = new Date();
    // console.log("시작 시간 :"+ connectedDate);
    // console.log(prev_time);
    
    if(window.name){
        prev_time = window.name;
    }
    
    window.name=prev_time;
    // setInterval(function(){
    //     time++;
    //     console.log(time);
    //     window.name=time;
    //     prev_tiem=time;
    // },1000)
    // setInterval(function(){
    //     var currentDate = new Date();
    //     console.log(currentDate);
    //     time = Number((currentDate - connectedDate)/1000);
    //     console.log(time);
    //     window.name = time;
        
    // },1000)
    $(".test1").on("click", function(){
        location.href="/test1/index.html";
    })

    $(".test2").on("click", function(){
        location.href="/test3/index.html";
    })
    
    $(".test3").on("click", function(){
        location.href="/test4/index.html";
    })

    $(".tag_box>li").on("click", function(){
        i=$(this).index()+1;
        console.log(i);
        if(i===1){
            $(".test_list>div").show();
        }else{
            $(".test_list>div").hide();
            $(".tag_"+i).show();
        }
    })
}

function once(fn, context) { 
    var result;
 
    return function() { 
        if(fn) {
            result = fn.apply(context || this, arguments);
            fn = null;
        }
 
        return result;
    };
}
 
// Usage
var canOnlyFireOnce = once(function() {
    prev_time=1800;
});
 

  
  