// promptla bilgi al ve ternary uygula 
var adın=document.querySelector("#adın")

var isim=prompt("lütfen kullanıcı adınızı giriniz");

(isim.length>0) ? adın.innerHTML=`${isim.toUpperCase()} ${adın.innerHTML}` : alert("kullanıcı adı girilmedi");

// saat ve haftanın günü
function baslat(){
    const bugun=new Date();
    let s=bugun.getHours();
    let dk=bugun.getMinutes();
    let sn=bugun.getSeconds();
    let day=bugun.getDay();
 

if(day==1){day="PAZARTESİ"}
else if (day==2){ day="SALI"}
else if (day==3){day="ÇARŞAMBA"}
else if (day==4){day="PERŞEMBE"}
else if (day==5){day="CUMA"}
else if (day==6){day="CUMARTESİ"}
else if (day==7){day="PAZAR"}

    document.querySelector("#zaman").innerHTML=s + ":" + dk + ":" +sn + "  " + day ;
    setTimeout(baslat, 1000);
}
baslat();