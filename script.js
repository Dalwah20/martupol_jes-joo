function openInvitation(){
document.getElementById("opening").style.display="none";
document.getElementById("music").play();
}

/* MUSIC */
function toggleMusic(){
var music=document.getElementById("music");
music.paused?music.play():music.pause();
}

/* COUNTDOWN */
var countDownDate=new Date("May 23, 2026 13:00:00").getTime();
setInterval(function(){
var now=new Date().getTime();
var distance=countDownDate-now;
var d=Math.floor(distance/(1000*60*60*24));
var h=Math.floor((distance%(1000*60*60*24))/(1000*60*60));
var m=Math.floor((distance%(1000*60*60))/(1000*60));
var s=Math.floor((distance%(1000*60))/1000);
document.getElementById("countdown").innerHTML=d+" Hari "+h+" Jam "+m+" Menit "+s+" Detik";
},1000);

/* SLIDER AUTO */
var slides=document.querySelectorAll(".slide");
var index=0;
setInterval(function(){
slides[index].classList.remove("active");
index=(index+1)%slides.length;
slides[index].classList.add("active");
},4000);

/* COPY REKENING */
function copyRek(id){
var text=document.getElementById(id).innerText;
navigator.clipboard.writeText(text);
alert("Nomor rekening disalin!");
}

/* REVEAL SCROLL */
window.addEventListener("scroll",function(){
document.querySelectorAll(".reveal").forEach(el=>{
var pos=el.getBoundingClientRect().top;
if(pos<window.innerHeight-100){el.classList.add("active");}
});
});
