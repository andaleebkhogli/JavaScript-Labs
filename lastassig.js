//CLASS STUDENT
function Student(name,grade,department){
    this.studentName=name;
    this.studentGrade=grade;
    this.studentDepartment = department;
}
//TABLE STUDENT
function createRow(studentObject){
      trObject=document.createElement("tr")
      trObject.classList.add(studentObject.studentDepartment);
   // for(i in studentObject){
    
         tdObject = document.createElement("td");
        tdObject.innerText = studentObject.studentName;
        trObject.appendChild(tdObject);
        tdObject = document.createElement("td");
        tdObject.innerText = studentObject.studentGrade;
        trObject.appendChild(tdObject);
        // tdObject=document.createElement("td");
        // tdObject.innerText = studentObject.studentDepartment;
    
       // trObject.appendChild(tdObject);
       // console.log(tdObject);
        //tdObject.innerText= studentObject[i];
        //trObject.appendChild(tdObject);

        // DELETING

        del = document.createElement("a");
        del.innerText = "DELETE";
        del.setAttribute("href" , "#")
        del.onclick = function(){}
      
            tdObject = document.createElement("td");
            tdObject.appendChild(del);
            trObject.appendChild(tdObject);

            studentTable.appendChild(trObject);


    }


    


var students=[];

window.addEventListener("load", function(){

    btnAdd = document.querySelector("input[value = 'Add']");
    nameObject = document.getElementsByName("stdname")[0];
    gradeObject = document.getElementsByName("grdname")[0];
    

    btnAdd.onclick = function(){
        departmentObject = document.querySelector("input[name = 'news']:checked");
        student = new Student(nameObject.value,gradeObject.value,departmentObject.value);
        students.push(student);
        createRow(student);
    } //addclick

    studentTable.onclick = function(event){
        event.preventDefault();
        if(event.target.tagName == "A")
        {
            deletedStudentValue = event.target.parentElement.parentElement.firstElementChild.innerText;
            console.log(deletedStudentValue);
            //deleted element
            students.splice(students.findIndex(function(object){
                return object.studentName = deletedStudentValue;
            }),1);
            //console.log(event.target.parentElement.parentElement.remove());
            event.target.parentElement.parentElement.remove();
        }
    } //delete click

    studentsFilter.onchange = function(){
        filteredValue = this.value;
        if(filteredValue == "Passed")
        {
         var test = students.filter(function(item){

            return item.studentGrade > 50;
         })
         studentTable.innerText="";
         for(i in test)
         {
             createRow(test[i]);
         }
        }
         
         else if(filteredValue == "Failed")
         {
             var test = students.filter(function(item){
   
                return item.studentGrade <= 50;
             })
             studentTable.innerText="";
             for(i in test)
             {
                 createRow(test[i]);
             }

         }
         else
         {
            studentTable.innerText="";
            for(i in students)
            {
            createRow(students[i]);
            }
         }
        
        } //change

}); //load