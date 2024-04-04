function calculateGrade(){
let anatomyMarks = parseFloat(document.getElementById ("anatomyMarks").value); 
let physiologyMarks = parseFloat(document.getElementById ("physiologyMarks").value);
let basicmetabolismMarks = parseFloat(document.getElementById ("basicmetabolismMarks").value);

if (isNaN (anatomyMarks) || isNaN (physiologyMarks) || isNaN (basicmetabolismMarks)){
    document.getElementById("result").innerHTML = " PLEASE ENTER VALID MARKS .";
    return;
}
 
 

 let totalMarks = anatomyMarks + basicmetabolismMarks + physiologyMarks;
 let percentage = (totalMarks/300) * 100;

 let grade = "";

    if(percentage >79){
        grade ="A";
    } else if(percentage >=60){
        grade ="B";
    } else if(percentage >=49){
        grade = "C";
    } else if (percentage >=40){
        grade= "D";
    } else{
        grade = "E";
    }

document.getElementById("result").innerHTML = "Total  Marks:" + totalMarks.toFixed(1) + "<br>percentage "+ percentage.toFixed(1) + "%" +"<br>Grade: " + grade;
}