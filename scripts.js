var FormInput = {
    email:"",
    topic:"",
    query:""
}

//Checks for form
var msg = "This is a required field";
function checkEmail(){
    var elMsg = document.getElementById('emailFeedback');
    var elInput = document.getElementById('emailInput');

    if(elInput.value.length == 0){
        elMsg.textContent = msg;
    }
}
function checkTopic(){
    var elMsg = document.getElementById('topicFeedback');
    var elInput = document.getElementById('topicInput');
    if(elInput.value.length == 0){
        elMsg.textContent = msg;
    }

}
function checkQuery(){
    var elMsg = document.getElementById('queryFeedback');
    var elInput = document.getElementById('queryInput');
    if(elInput.value.length == 0){
        elMsg.textContent = msg;
    }
}

//Form features
function takeForm(){
    FormInput.email = document.getElementById('emailInput').value;
    FormInput.topic = document.getElementById('topicInput').value;
    FormInput.query = document.getElementById('queryInput').value;
    if(FormInput.email.length==0 ||
        FormInput.topic.length==0 ||
        FormInput.query.length==0) {
            alert("You need to fill in all the forms to send me an email");
            return false;
        } 
    var el = document.getElementById('form');
    el.remove();
    var formTitle = document.getElementById('formTitle');
    formTitle.textContent = "You have submitted the following message:";
    var emailText = document.createElement('h4');
    emailText.innerHTML = "Email: " + FormInput.email;
    var topicText = document.createElement('h4');
    topicText.innerHTML = "Topic: " + FormInput.topic;
    var queryText = document.createElement('h4');
    queryText.innerHTML = "Query: " + FormInput.query;
    
    var formDiv = document.getElementById('formDiv');
    formDiv.appendChild(emailText);
    formDiv.appendChild(topicText);
    formDiv.appendChild(queryText);
    return true;
        
}

function buttonText(input){
    var subButton = document.getElementById('subButton');
    switch(input){
        case 1:
        subButton.innerHTML = "Ready to submit this form?";
        break;
        case 2:
        subButton.innerHTML = "Submit";
        break;
        defualt:
        break;
    }
}

var count=0;
function Collatz(){
    var number=document.getElementById('Collatz').value;
    if(number=="sqrt(-1)"){
        alert("I'd prefer to keep it real thanks")
        // Aida made me add this
    }
    if(isNaN(number) || number=="" 
        || number<=0 ){
        alert("Please enter a integer number");
        return false;
    }
    var values=number;
    const arr = [number];
    while(number!=1)
    {
        if(number%2==0){
            number=number/2;
        } else{
            number=(3*number) + 1;
        }
        arr.push(number);
    }
    for(var i=1; i<arr.length; i++){
        values = values + ", " + arr[i];
    }
    document.getElementById('CollatzPrint').innerHTML=values;
    count++;
    document.getElementById('count').innerHTML=count;
    return true;
}

var spentSeconds=0;
var spentMinutes=0;
var spentHours=0;
function timer(){
    spentSeconds++;
    if(spentSeconds>=60){
        spentMinutes++;
        spentSeconds=0;
    }
    if(spentMinutes>=60){
        spentHours++;
        spentMinutes=0;
    }
    document.getElementById('spentTime').innerHTML = spentHours + ":" + spentMinutes + ":" + spentSeconds + " ";
}
setInterval(timer, 1000); 
function updateTime(){
    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    var seconds = currentTime.getSeconds();
    if (minutes < 10){
        minutes = "0" + minutes
    }
    var t_str = hours + ":" + minutes + ":" + seconds + " ";
    if(hours > 11){
        t_str += "PM";
    } else {
        t_str += "AM";
    }
    var day = currentTime.getDate();
    var month = currentTime.getMonth();
    var year = currentTime.getFullYear();
    t_str+= " - " + day + "." + month + "." + year;
    document.getElementById('time_span').innerHTML = t_str;
}
setInterval(updateTime, 1000);


//jQueary Stuff
$(document).ready(function(){
    var x = 1500;
    $("nav").fadeToggle(0);
    $(".PS").slideToggle(0);
    $(".ED").slideToggle(0);
    $(".SKL").slideToggle(0);
    $(".CON").slideToggle(0);
    $(".FS").slideToggle(0);
    $("footer").fadeToggle(0);
    
    $("nav").fadeToggle(x,function(){
        $(".PS").slideToggle(x,function(){
            $(".ED").slideToggle(x);
        });
        
        $(".SKL").slideToggle(x);
        
        $(".CON").slideToggle(x,function(){
            $(".FS").slideToggle(x,function(){
                $("footer").fadeToggle(x);
            });
        });
    
    });
    
  });


