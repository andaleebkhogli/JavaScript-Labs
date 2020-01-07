//1st Class
function Employee(ename="anon",edep="ITI",esal=0){ // our class
    this.edep = edep;
    this.ename = ename;
    var _esal = esal;

    this.setSalary= function(value){ // salary
        _esal = value;
    }
    this.getSalary= function(){ //getter
        return _esal;
    }

    this.toString = function(){
        return "Name: " + this.ename + " Department: " + this.edep + " Salary: " +_esal;
    }

}

//var employee1 = new Employee("ALI" , "SD" , 1000); // 


// 2nd Inserting in HTML 
var employees = [];
var strCopy;
var test, test1 , test2;

for(i=0; i<3; i++){

    test1 = prompt("Enter employee data", "Name,Dep,Salary");
    test2 = test1.split(","); // array
    employees.push(new Employee(test2[0],test2[1],parseInt(test2[2])));
}

// 3rd
employees.sort(function(a,b){
    if(a.edep.toUpperCase()> b.edep.toUpperCase()) return 1;
    else if(a.edep.toUpperCase()< b.edep.toUpperCase()) return -1;
    else{ // Occurs when departments have same name
        if(a.getSalary()< b.getSalary()) return 1;
        else if(a.getSalary()>b.getSalary()) return -1;
        else return 0;

    }
})



// 4th */

var test4 = employees.filter(function(item){return item.getSalary()> 2000});
// as anon function bt5od item w trg3 item. value bta3ty b2a

// 5th BONUS

//6th in 4th html file
window.document.title=0;
var counter=1;
var test = setInterval(function()
{
    window.document.title=counter++;
    if(window.document.title == 10)
    {
        clearInterval(test);
    }
}, 1000 ); 