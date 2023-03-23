const result_pic=["new_main_crt1_ov","new_main_crt2_ov", "new_main_crt3_ov","new_main_crt4_ov","new_main_crt5_ov","new_main_crt6_ov","new_main_crt7_ov","new_main_crt8_ov","new_main_crt9_ov","new_main_crt10_ov","new_main_crt12_ov"];
const quiz = [{"q":"배달 앱 속 나의 등급은?",
                "a":["그냥 가끔 집에 있거나 <br>친구들이랑 파티할 때 시킴","VIP 이하로 떨어져 본 적이 없음","배달은 별로, 난 맛집 탐방가임"]},
            {"q":"집에만 있으니 심심한 당신!<br>생각에 빠지게 되는데...",
        "a":["휴 이렇게 집에만 있으니 좀 그렇다.라고 생각하며 당장 뭘 배워야 할지 찾아보고 상담예약을 잡아본다.","나는.. 아무 생각이 없다.<br>왜냐면 아무 생각이 없기 때문이다","당분간은 계속 집에 있어야 하는데.. 먹을 간식과 생필품을 구입한다."]},
    {"q":"약속 시간 전 당신의 모습은?",
"a":["옷은 전날에 미리 골라놨으니<br>메이크업, 헤어 등 섬세하게 꾸민다","아 귀찮다.. 나가지말까.. 하고 늘어져 있다가 시간을 보고 재빨리 준비한다.","약속 2시간 전부터 일어나서 준비중이지만 세월아 네월아 한다."]},
{"q":"친구들과의 약속이 있을 때 나의 모습은?",
"a":["10분 전에 미리 도착해 친구들을 기다린다.","진짜 되도록 안 나가지만<br> 굳이 약속이 있다면 정각에 도착한다.","조금 늦는다고 연락하고<br>친구들이 다 모였을 때 그 장소로 간다."]},{
"q":"주말에 만나자는 친구!<br>하지만 집밖은 위험해!<br>나의 대답은?",
"a":["그래도 친구가 오랜만에 만나자니 나간다","귀찮지만 뭐하는지에 따라 결정한다","귀찮은건 절대 NO!<br>약속있는척하고 안나간다"]},
{"q":"아무 약속이 없는 주말, 뭐할까?","a":["밥먹고 세수와 양치만 하고<br>쇼파에 앉아 티비를 본다","밥 먹고 샤워를 한 뒤<br>밀린 방 청소나 할 일을 찾아 움직인다.", "안씻고 누워서 넷플릭스나 왓챠를 켜본다."]},{
    "q":"나에게 소확행이란?","a":["남자친구와 주말에 걸어다니면서<br>소소한 데이트하기","친구들이랑 다 같이 모여서<br>캠핑이나 1박 여행을 간다","행복이란<br>'내침대에서 따듯한 전기장판과<br>부드러운 극세사 이불을 덮고<br> 귤을 까먹으며 밀린 드라마를 보는것'..."]
},{
    "q":"갑자기 일이 생겨서 못 만난다고 하는 친구!","a":["아.. 어쩔수 없지 하면서 바로 다른친구에게 전화를 건다","안타까워 하는척하면서 집에서 쉴 생각에 기분이 좋아진다.","밖에 있으면 누구라도 나오겠지. 카페나 pc방에서 친구들을 부른다"]
},{
    "q":"드디어 금요일, 주말에 뭐할까?", "a":["집에 있다가 만나자는 연락을 받으면 저녁에 슬슬 기어나간다.","집에 있는건 너무 심심해! 친구들한테 만나자며 먼저 연락한다.","주말에..왜 약속을... 난 쉴랭! 굳이 먼저 약속을 따로 잡지 않는다."]
},{"q":"집에 있을 때 나의 모습은?","a":["으 시간이 왜 이렇게 안가.. 주변 친구들에게 연락해서 나갈 각 잡기","밀린 드라마나 영화가 너무 많아.. 하루가 너무 짧다.","낮엔 자고 밤에 나가야지~ 8~9시쯤 나갈 준비를 해본다.ㄹ"]}]

let i, num=0, q, a=0, result=0;

window.onload = function(){
    a=0;
    result=0;

    $(".btn_start").on("click", function(){
        location.href = "quiz.html";
    })

    $(".q").html(quiz[0].q);
    for(j=0;j<3;j++){
        $(".a:eq("+j+")").html(quiz[0].a[j]);
    }

    $(".a").on("click", function(){
        i=$(this).index();
        if(num<9){
            num++;
            $(".q").html(quiz[num].q);
            for(j=0;j<3;j++){
                $(".a:eq("+j+")").html(quiz[num].a[j]);
            }
            $(".page>p:eq(0)").text(num+1);
            $("li:eq("+num+")").css("background", "plum");
        }
        if(num===9){
            num++;
            $(".page>p:eq(0)").text(num);
            
        }else if(num===10){
            location.href="result.html";
            localStorage.setItem('a_save',a);
        }
        if(num<11){
            if((i%2)==0){
                a+=1;
            }else{
                a+=2;
            }
            
        }
    })
    file_name = document.URL.substring(document.URL.lastIndexOf('/') + 1, document.URL.length);
    if(file_name==="result.html"){
        j=0;
        // setInterval(function(){
        //     $(".loading_img").css("background","url(../img/로딩바"+j+".png)");
        //     j++;
        // }, 235,j);
        setTimeout(function(){
            $(".loading").hide(); }, 5000);
        if(localStorage.getItem('a_save')){
            a = localStorage.getItem('a_save');
        }
        result=Number(a)-9;
        console.log("a:"+a);
        console.log("result:"+result);
        
        // $(".result_pic").css("background", "url(/img/"+result_pic[result]+".png)");
        //     $(".result_pic").css("backgroundSize", "100% 100%");

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
    }
}