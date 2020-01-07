var arr = [2,1,2,7,2,8,4,6,10,9,12];
//1st
arr.sort(function(a,b)
{
    if(a>b) return 1;
    else if(a<b) return -1;
    else return 0;
}
)
//2nd
filteredArray = arr.filter(function(item){ return item>5; })

// 3rd
//3rd Max
var max = arr.reduce(function(a, b) {
    return Math.max(a, b);
});
//3rd Min
var min = arr.reduce(function(a, b) {
    return Math.min(a, b);

});

//var min1 = console.log("tesssst ", Math.min(...arr)); another sever
//4th
removedupl = arr.filter(function (item,index){ return arr.indexOf(item) === index; })

// --------------------------------------------------------------------------------------------------------
//2nd task
var student = {

    nameStudent: {firstName:'Andaleeb' , middleName:'Anan' , lastName:'Ali'} ,
    ageStudent: 23 ,
    printData: function(){
        console.log("Your name is " +this.nameStudent.firstName + " " +this.nameStudent.middleName +" " +this.nameStudent.lastName );
        console.log("your age is " +this.ageStudent);
    }
}
 
//  BONUS

// -----------------------------------------------

function random3 (x){

    myArr =[];
    if(x<10)
    {   
        for(i=0; i<x; i++)
        {
           var ran = (Math.floor(Math.random()*10));
           if(!myArr.includes(ran))
            myArr[i] = ran;
           
           else
            i--;

        }
        
    }
    else// x>10
    {
        for(i=0; i<10; i++)
        {
            var ran = (Math.floor(Math.random()*10));
            if(!myArr.includes(ran))
             myArr[i] = ran;

            else
             i--;
           
        }
    }
    
    return myArr;
}


























