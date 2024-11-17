 var randomnumber1 = Math.random();
 var randomn1 = Math.floor(randomnumber1*6)+1;


  var randomnumber2 = Math.random();
  var randomn2 = Math.floor(randomnumber2*6)+1;


  document.querySelector(".img1").setAttribute("src","./images/dice"+randomn1+".png");
  document.querySelector(".img2").setAttribute("src","./images/dice"+randomn2+".png");
 

function winner( randomn1,randomn2)
{
   if(randomn1>randomn2){
    return "Player 1 is winner";
   }
   else if(randomn1<randomn2){
    return "Player 2 is winner";
   }
   else{
    return "It is drow";
   }
  
}
document.querySelector("h1").innerHTML = winner( randomn1,randomn2);


