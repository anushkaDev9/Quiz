function check(){
    var total=10;
    var score=0;
    let q1=document.forms["cssQuiz"]["q1"].value;
    let q2=document.forms["cssQuiz"]["q2"].value;
    let q3=document.forms["cssQuiz"]["q3"].value;
    let q4=document.forms["cssQuiz"]["q4"].value;
    let q5=document.forms["cssQuiz"]["q5"].value;
    let q6=document.forms["cssQuiz"]["q6"].value;
    let q7=document.forms["cssQuiz"]["q7"].value;
    let q8=document.forms["cssQuiz"]["q8"].value;
    let q9=document.forms["cssQuiz"]["q9"].value;
    let q10=document.forms["cssQuiz"]["q10"].value;
    if(q1==''||q1==null){
   
        document.getElementById("q1na").style.visibility="visible";
        return false
       }
       
       if(q2==''||q2==null){
        document.getElementById("q2na").style.visibility="visible";
        return false
       } 
       if(q3==''||q3==null){
        document.getElementById("q3na").style.visibility="visible";
        return false
       }
       if(q4==''||q4==null){
        document.getElementById("q4na").style.visibility="visible";
        return false
       }
       if(q5==''||q5==null){
        document.getElementById("q5na").style.visibility="visible";
        return false
       }
       if(q6==''||q6==null){
        document.getElementById("q6na").style.visibility="visible";
        return false
       }
       if(q7==''||q7==null){
        document.getElementById("q7na").style.visibility="visible";
        return false
       }
       if(q8==''||q8==null){
        document.getElementById("q8na").style.visibility="visible";
        return false
       }
       if(q9==''||q9==null){
        document.getElementById("q9na").style.visibility="visible";
        return false
       }
       if(q10==''||q10==null){
        document.getElementById("q10na").style.visibility="visible";
        return false
       }
       
     
       var answersCSS=['a','a','c','c','a','b','b','a','a','a']
       for(i=1;i<=total;i++){
        if(eval('q'+i)==answersCSS[i-1])
    {
    score++;
    }   
    }
       alert("Your score is: "+ score+"/"+total)
}