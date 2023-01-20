function check(){
    var total=10;
    var score=0;
    var q1=document.forms['javascriptQuiz']['q1'].value
    var q2=document.forms['javascriptQuiz']['q2'].value
    var q3=document.forms['javascriptQuiz']['q3'].value
    var q4=document.forms['javascriptQuiz']['q4'].value
    var q5=document.forms['javascriptQuiz']['q5'].value
    var q6=document.forms['javascriptQuiz']['q6'].value
    var q7=document.forms['javascriptQuiz']['q7'].value
    var q8=document.forms['javascriptQuiz']['q8'].value
    var q9=document.forms['javascriptQuiz']['q9'].value
    var q10=document.forms['javascriptQuiz']['q10'].value
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
       
       var answersJS=["a","a","b","a","d","b","b","a","b","a"]
       for(i=1;i<=total;i++){
        if(eval('q'+i)==answersJS[i-1]){
            score++;
        }

       }
       alert("Your score is: "+ score+"/"+total)
}
