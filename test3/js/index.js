const result_pic=["new_main_crt1_ov","new_main_crt2_ov", "new_main_crt3_ov","new_main_crt4_ov","new_main_crt5_ov","new_main_crt6_ov","new_main_crt7_ov","new_main_crt8_ov","new_main_crt9_ov","new_main_crt10_ov","new_main_crt12_ov"];

const qna = [
    {
        "q":"주말에 연인과 신나게 놀고 나서 나는?",
        "a":["이번 주말도 재밌었다! 이제 집에서 푹 쉬어야지!","이번 주말도 알찼다! 충전 완료!"
        ]},{
        "q":"평소 사람들이 많은 모임에서 나는?",
        "a":["조용하고 상대방 말에 공감을 잘한다"
        ,"열정적이고 내 의견을 자신 있게 말한다"]
    },{
        "q": "내가 선호하는 데이트는?",
        "a" :["조용한 실내 데이트","신나는 실외 데이트"]
    },{
        
        "q":"친구들과 술자리 약속에 간 연인이 연락 두절 상태라면?",
        "a":[
        "설마 다른 이성이랑 놀고 있는 건 아니겠지?",
        "감히 내 연락을 안 받아?!"]},        
        {
        "q":"연인과 여행가기 전날 나는?",
        "a":["도착해서 신나게 노는 상상을 하다가 잔다",
        "빨리 가고 싶어서 일찍 잔다"
]},{
        "q":"내가 더 선호하는 대화는?",
        "a":["상상력이 필요한 미래지향적인 대화",
        "현재 유행하는 것이나, <br>관심사에 관해 이야기하는 대화"]},{
        "q":"연인과 갈등 상황에 나는?",
        "a":["할 말은 많은데 감정이 <br>먼저 상해서 생각 정리가 잘 안된다",
        "답답하지만 이성적으로 갈등을 풀어가려고 <br>침착하게 말한다"]},{
        
        "q":"활기차던 연인이 갑자기 심각한 얼굴로 고민을 털어 놓는다면?",
        "a":["연인에게 감정이입을 하면서, <br>진지하게 듣고 공감한다",
        "연인의 말을 끝까지 듣고, <br>문제를 해결해주려 한다"]},{
        
        "q":"연인이 아끼는 물건을 떨어뜨려서 부서졌다고 한다면?",
        "a":["어쩌다가 떨어진 거야? 어떡해 조심하지ㅠ",
        "그거 너가 아끼던 거였는데ㅠ 어떡해ㅠ"]},{
        
        "q": "연인과 데이트 약속 시간에 나는?",
        "a":["약속 시간에 자주 늦는다",
        "약속 시간보다 미리 나와 있는다"]},
        {
        "q":"연인과 데이트하기 전 나는?",
        "a":["약속 장소와 시간 정도만 정해 놓고 만난다",
        "약속 장소와 시간은 물론 <br>어디서 무엇을 할 건지 세세하게 정한다"]},
        
        {"q":"연인에게 편지를 쓴다면 나는?",
        "a":["일단 앉아서 그 자리에서 생각나는 대로 적는다",
        "어떻게 적을지 미리 생각해 놓고 옮겨 적는다"]}
]

let i, num=0, q, a=0, result, file_name, connectedDate, prev_time;
let ie=0, ns=0, ft=0, pj=0;

window.onload = function(){
    a=0;

    connectedDate = new Date();
    console.log(connectedDate);
    
   
    $(".q").html(qna[0].q);
    
    $(".a:eq(0)").html(qna[0].a[0]);
    $(".a:eq(1)").html(qna[0].a[1]);
    
    // setInterval(function(){
    //     var currentDate = new Date();
    //     console.log(currentDate);
    //     time = Number((currentDate - connectedDate)/1000);
    //     console.log(time);
    //     window.time = time;
    // },1000);
    $(".pic").on("click", function(){
        location.href="quiz.html";
    })

    $(".a").on("click", function(){
        
        i=$(this).index();
        if(num<4){
            if(i===0){
                ie++;
            }else{
                ie--;
            }
        }else if(num<7){
            if(i===0){
                ns++;
            }else{
                ns--;
            }
        }else if(num<10){
            if(i===0){
                ft++;
            }else{
                ft--;
            }
        }else if(num<13){
            if(i===0){
                pj++;
            }else{
                pj--;
            }
        }
        if(num<11){
            num++;
            console.log(num);
            $(".page>p:eq(0)").html(num+1);
            $("li:eq("+(num)+")").css("background","plum");

            $(".q").html(qna[num].q);
            for(j=0;j<2;j++){
                $(".a:eq("+j+")").html(qna[num].a[j]);
            }
            
        }else if(num===11){
            a+=Number($(this).text());
            location.href="result.html";
            
            
            if(ie<0){
                result="e";
            }else{
                result="i";
            }
            if(ns<0){
                result+="n";
            }else{
                result+="s";
            }
            if(ft<0){
                result+="t";
            }else{
                result+="f";
            }
            if(pj<0){
                result+="j";
            }else{
                result+="p";
            }
            localStorage.setItem('result_save',result);

        
        }

        
    })

    $(".prev").on("click", function(){
        
        if(num<4){
            if(i===0){
                ie--;
            }else{
                ie++;
            }
        }else if(num<7){
            if(i===0){
                ns--;
            }else{
                ns++;
            }
        }else if(num<10){
            if(i===0){
                ft--;
            }else{
                ft++;
            }
        }else if(num<13){
            if(i===0){
                pj--;
            }else{
                pj++;
            }
        }
        num--;
        console.log(num);
        $(".page>p:eq(0)").html(num+1);
        $("li:eq("+(num+1)+")").css("background","white");
        $(".q").html(qna[num].q);
            for(j=0;j<2;j++){
                $(".a:eq("+j+")").text(qna[num].a[j]);
        }
    })
    
    


    file_name = document.URL.substring(document.URL.lastIndexOf('/') + 1, document.URL.length);
    if(file_name==="result.html"){
        setTimeout(function(){
            $(".loading").hide();
            $(".result_pic").show();

        }, 5000);

        // resultOnce();
     

        if(localStorage.getItem('result_save')){
            result = localStorage.getItem('result_save');
        }
        $(".result_pic").css("background", "url(./img/"+result+".png)");
        $(".result_pic").css("backgroundSize", "100%");

        prev_time=Number(window.name)
        
    }
       
    
    $(".link").on("click",function(){
        var url = '';
        var textarea = document.createElement("textarea");
        document.body.appendChild(textarea);
        url = window.document.location.href;
        textarea.value = url;
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        alert("URL이 복사되었습니다.")
    })
    $(".home").on("click",function(){
        location.href="../index.html";
    })
}


// function once(fn, context) { 
//     var result;
 
//     return function() { 
//         if(fn) {
//             result = fn.apply(context || this, arguments);
//             fn = null;
//         }
 
//         return result;
//     };
// }

// var resultOnce = once(function(){
//     $(".c_btn").show();
//     $(".result_pic").css("height","200px");
// }); 