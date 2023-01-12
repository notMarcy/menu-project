let german = document.querySelector('.ger');
let germinf = document.querySelector('.german');
let sh=true;
german.addEventListener("click", function(){
  
   if(sh==true){
         germinf.style.zIndex ="3"
         sh = false
   }
   else if(sh==false){
      germinf.style.zIndex="1"
      sh=true
   }
})