var randomNUmber1=(Math.random()*6)+1;
randomNUmber1=Math.floor(randomNUmber1);
var x="images/dice"+randomNUmber1+".png";
document.querySelector(".img1").setAttribute("src",x);

var randomNUmber2=(Math.random()*6);
randomNUmber2=Math.floor(randomNUmber2)+1;
var y="images/dice"+randomNUmber2+".png";
document.querySelector(".img2").setAttribute("src",y);

if(randomNUmber1>randomNUmber2){
  document.querySelector("h1").innerHTML="🚩PLayer 1 Wins!";
}
else if(randomNUmber1<randomNUmber2){
  document.querySelector("h1").innerHTML="PLayer 2 Wins!🚩";
}
else{
  document.querySelector("h1").innerHTML="Draw!";
}
