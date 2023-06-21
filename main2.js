function send() {
    Number1= document.getElementById("word").value;
    Number2= document.getElementById("word2").value;
    actual_ans=parseInt(Number1)* parseInt(Number2)
    


    question_number = "<h4>"+ Number1 +"X" Number2 +"</h4>";
    input_box = "<br></br>Answer: <input_type='text' id='input_check_box'>"
    check_button="<br><br> <button class='btn btn-info onclick=check()'>check</button>"
    row= question_word+input_box+check_button 
    document.getElementById("output").innerHTML=row
}
















