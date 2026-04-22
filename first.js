function calculateResult(){
    let n=document.getElementById("subject").value;
    let total =0;
    for(let i=0; i<n; i++){
        let marks = parseFloat(prompt("enter marks for subject"+i));
        total+=marks;

    }
    let average = total /n;
    let grade;
    let result;
    if(average>=90)
        grade = "A+";
      else if(average>=75)
        grade = "A";
      else if(average>=60)
        grade = "B";
      else if(average>=50)
        grade = "C";
    if(average<40)
        result = "fail";
    else{
result = "pass";
    }
    document.getElementById("result").innerHTML=
    "total marks="+total+ "<br>" +"average="+average+ "<br>" +"grade="+grade+"<br>" +"result="+result
}