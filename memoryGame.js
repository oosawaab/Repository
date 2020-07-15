var cards = [];
var ran=[];
var memoryname;
var memoryid;
var count=0;
var idcount=0;
var memory;
var clearcount=0;

$(function(){
  init();
  $(".card").click(function(){
    var name =$(this).attr("name");
    var id=$(this).attr("id");

    $(this).toggleClass("open");
    if(count==0){
      beforetime= $.now();
    }
    if(count%2==0){
      memory=(this);
      memoryname=name;
      memoryid=id;

    }else{

      //  time.getHours()+":"+time.getMinutes()+":"+time.getSeconds()
      $(this).on('transitionend',function(){
        if((name==memoryname)&&(id!=memoryid)){//あたり
          //alert("正解！")
          $(this).css("pointer-events","none");
          $(memory).css("pointer-events","none");
          var audio = new Audio("Quiz-Buzzer02-1.mp3");
          audio.play();
          clearcount++;
          console.log(clearcount);
          if(clearcount==19){
            alert("AllClear!");
            //aftertime=new Date();

          }
        }else if(name!=memoryname){//外れ

          $(this).toggleClass("open");
          $(memory).toggleClass("open");
          //alert("外れ");
          $(this).off('transitionend');
        }
      });
    }
    count++;


    //}

    //console.log("name="+name+",memoryname"+memoryname+",count"+count+"judge"+judge);
    //alert("name"+name);
  });
});

function createCard(n){

  idcount++;
  var card =$('<div>').addClass('card');
  var card_front=$('<div>').addClass("card-front");
  var card_back=$('<div>').addClass("card-back");
  card.attr("id", idcount);
  card.attr("name", n);
  card_front.html('<img  src="https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_'+n+'.jpg">');

  card.append(card_front);
  card.append(card_back);
  //console.log("id="+idcount);
  return card;
}

function init(){
  Random();
  for(var s=0;s<ran.length;s++){
    //console.log(ran[s]);
  }
  for(i=0;i<ran.length;i++){
    if(ran[i]+1<10){
      num='0'+(ran[i]+1);
      cards.push(createCard(num));
      // cards.push(createCard(num));
    }else{
      num=ran[i]+1;
      cards.push(createCard(num));
      //cards.push(createCard(num));
    }
  }
  ran=[];
  Random();
  for(i=0;i<ran.length;i++){
    if(ran[i]+1<10){
      num='0'+(ran[i]+1);
      cards.push(createCard(num));
      // cards.push(createCard(num));
    }else{
      num=ran[i]+1;
      cards.push(createCard(num));
      //cards.push(createCard(num));
    }
  }


  for(var i=0;i<cards.length;i++){
    //sconsole.log("append");
    card=cards[i];
    $('#card-container').append(card);
  }

}
function Random(){

  ran.push(Math.round( Math.random()*18));
  while(ran.length<19){
    var rand= Math.round( Math.random()*18);
    for(var x=0;x<ran.length;x++){
      if(ran[x]==rand){break;}
      if(x==ran.length-1){ran.push(rand);}
      //console.log(rand);
    }
  }
}
