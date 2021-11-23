let userName = prompt("Adınızı Giriniz")
let myName = document.querySelector("#myName")

if(userName.length>0){
    myName.innerHTML= `${userName[0].toUpperCase()}${userName.slice(1).toLowerCase()}`
}else {alert("Lütfen adınızı giriniz")}
 
function showTime(){
let date = new Date();
let h = date.getHours();
let m = date.getMinutes();
let s = date.getSeconds();
let day = date.getDay();

if(day== 1) {
    day= "Pazartesi"
}else if (day==2){
    day= "Salı"
}else if (day==3){
    day= "Çarşamba"
}else if (day==4){
    day= "Perşembe"
}else if (day==5){
    day= "Cuma"
}else if (day==6){
    day= "Cumartesi"
}else if (day==7){
    day= "Pazar"
}

let time = h + ":" + m + ":" + s +" "+  day

let myClock= document.querySelector("#myClock")
myClock.innerHTML= `${time}`
}

showTime()