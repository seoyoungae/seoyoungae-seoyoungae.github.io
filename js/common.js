<<<<<<< HEAD
let time=0, prev_tiem=0, result_f=0;

$(function(){
    prev_time = window.name;
    time=prev_time;
    setInterval(function(){
        time++;
        console.log(time);
        window.name=time;
        prev_tiem=time;
    },1000)
    console.log("이전 소요시간 :"+ prev_time);
    toBeRunOnce();
        console.log(prev_time);
        if(prev_time<1800){
            
            window.name=prev_time;
        }else if(prev_time>1800){
            $(".c_btn").show();
            $(".result_pic").css("height","200px");
        }
        $(".c_btn").on("click", function(){
            $(".result_pic").css("height","1000px");
            $(".c_btn").hide();
            window.open("https://link.coupang.com/a/TYJmC")
            prev_time=0;
            window.name=0;
            time=0;
            result_f=2;

        })
        
})

function result_func(){
    $(".c_btn").show();
            $(".result_pic").css("height","200px");
}

function toBeRunOnce()  {
    prev_time=1800;
    console.log('toBeRunOnce has completed');
    toBeRunOnce = null;
=======
let time=0, prev_tiem=0, result_f=0;

$(function(){
    prev_time = window.name;
    time=prev_time;
    setInterval(function(){
        time++;
        console.log(time);
        window.name=time;
        prev_tiem=time;
    },1000)
    console.log("이전 소요시간 :"+ prev_time);
    toBeRunOnce();
        console.log(prev_time);
        if(prev_time<1800){
            
            window.name=prev_time;
        }else if(prev_time>1800){
            $(".c_btn").show();
            $(".result_pic").css("height","200px");
        }
        $(".c_btn").on("click", function(){
            $(".result_pic").css("height","1000px");
            $(".c_btn").hide();
            window.open("https://link.coupang.com/a/TYJmC")
            prev_time=0;
            window.name=0;
            time=0;
            result_f=2;

        })
        
})

function result_func(){
    $(".c_btn").show();
            $(".result_pic").css("height","200px");
}

function toBeRunOnce()  {
    prev_time=1800;
    console.log('toBeRunOnce has completed');
    toBeRunOnce = null;
>>>>>>> 9c76c74bf9b68555402084618464aa84861ccbb3
}