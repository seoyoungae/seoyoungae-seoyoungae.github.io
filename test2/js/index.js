const result_pic=["new_main_crt1_ov","new_main_crt2_ov", "new_main_crt3_ov","new_main_crt4_ov","new_main_crt5_ov","new_main_crt6_ov","new_main_crt7_ov","new_main_crt8_ov","new_main_crt9_ov","new_main_crt10_ov","new_main_crt12_ov"];
let i, num=0, q, a=0, result=0;

window.onload = function(){
    a=0;
    result=0;

    for(i=0;i<$(".a").length-1;i++){
        $(".a:eq("+i+")").text(Math.floor(Math.random()*11));
    }
    

    $(".a").on("click", function(){
        i=$(this).index();
        $(this).css("background","plum");
        if(num<4){
            num++;
            $(".quiz").hide();
            $(".quiz:eq("+num+")").show();
            $(".page>p:eq(0)").text(num+1);
            $("li:eq("+(num)+")").css("background","plum");
            a+=Number($(this).text());
        }
        if(num===4){
            num++;
            $(".page>p:eq(0)").text(num);
            
        }else if(num===5){
            a+=Number($(this).text());
            location.href="result.html";
            localStorage.setItem('a_save',a);
        }
    })
    file_name = document.URL.substring(document.URL.lastIndexOf('/') + 1, document.URL.length);
    if(file_name==="result.html"){
        setTimeout(function(){
            $(".loading").hide();
        }, 5000);
        if(localStorage.getItem('a_save')){
            a = localStorage.getItem('a_save');
        }
        $(".num").text(a);
        console.log("a:"+a);
        console.log("result:"+result);
    }
       
}