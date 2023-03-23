
let i, num=0, q, a=0, result=0;

window.onload = function(){
    $(".test1").on("click", function(){
        location.href="/test1/index.html";
    })

    $(".test2").on("click", function(){
        location.href="/test2/index.html";
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