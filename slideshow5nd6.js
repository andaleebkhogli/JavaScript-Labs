window.addEventListener("load" , function(){
getNext = document.getElementById("nextBtn")
getPrev = document.getElementById("prevBtn")

Counter=1;

getNext.onclick=function(){
    imgObject=document.images[0];
        Counter++;
        if(Counter==8) 
        Counter=1;
        imgObject.src="img/"+Counter+".jpg";
    ;
}

getPrev.onclick=function(){
    imgObject=document.images[0];
        Counter--;
        if(Counter<=1) 
        Counter=8;
        imgObject.src="img/"+Counter+".jpg";
   
}

}
)