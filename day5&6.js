// 1st - USING DOC OBJ METHODS
//1.a
document.images
document.images[0]
document.images[1]
//1.b
var imgObj = document.images[0]
imgObj.src;
//"file:///D:/ITI%20intake40/JavaScript/Day5&6/Demoes/images/2.jpg"

//2
document.forms["UserData"].City.options

//3
document.getElementsByTagName("table")[1]

//4
//document.getElementsByClassName("fontBlue")
//document.getElementsByClassName("bGrey")
document.getElementsByClassName("fontBlue bGrey") // both in one line

//5
document.getElementsByTagName("p")

// ----------------------------------------------------------------------------------

//2nd DO the following ACTIONS
//1
var getTable = document.getElementsByTagName("table")[1]
var trObj = getTable.getElementsByTagName("tr")[0] 
trObj.setAttribute("href" , "www.training.com")
trObj.getAttribute("href") // "www.training.com"
//
trObj.setAttribute("a" , "Training")
trObj.getAttribute("a") 

// 2

var changeImg = document.getElementsByTagName("img")
/* changeImg[0].setAttribute("border" , "2px")
changeImg[0].style.borderColor ="pink"
changeImg[1].setAttribute("border" , "2px")
changeImg[1].style.borderColor ="pink" */
changeImg[0].style.border = "solid pink 2px"
changeImg[0].style.border = "solid pink 2px"

// 3 -- ??
// document.getElementById("UserData");
// var FormElement =  document.getElementsByName("hoppy")[0].Value
// document.querySelector("input[type = checkbox][name = 'hoppy']").checked
// document.querySelector("input[type = checkbox][name = hoppy]")

var andObj=document.getElementById("UserData")
//andObj.querySelector("input[type = checkbox][name = 'hoppy']")
var newObj=andObj.querySelectorAll("input[type = checkbox][name = 'hoppy']")
for (i in newObj){ if (newObj[i].checked) ( obj =newObj[i].value);}
console.log(obj);

// 4th
document.getElementById("example")
var exampleVar = document.getElementById("example")
exampleVar.style.backgroundColor= "pink"
