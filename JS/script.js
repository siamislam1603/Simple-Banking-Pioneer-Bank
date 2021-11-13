const loginBtn=document.getElementById('submit-btn');
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function handleClick(){
    // const loginSection=document.getElementById('login-section');
    // const isValidEmail=validateEmail(email);
    // if(isValidEmail && password.length>7){
    //     loginSection.style.display="none";
    // }
    // else{
    //     forms[0].setAttribute('class','form-control is-invalid');
    // }
}
function handleInputs(event){
    var isValidInput=false;
    if(event.target.type=='email'){
        isValidInput=validateEmail(event.target.value);
        var nonTargetId='validationPassFeedback';
        var targetId='validationEmailFeedback';
    }
    else{
        if(event.target.value.length>7)
            isValidInput=true;
        var nonTargetId='validationEmailFeedback';
        var targetId='validationPassFeedback';
    }
    var targetElement=document.getElementById(targetId);
    var nonTargetElement=document.getElementById(nonTargetId);
    if(!isValidInput){
        event.target.setAttribute('class','form-control is-invalid');
        targetElement.style.display='block';
        nonTargetElement.style.display='none';
    }
    else{
       event.target.setAttribute('class','form-control is-valid');
       document.getElementById(targetId).style.display='none';
    }
}
loginBtn.onclick=handleClick;
const forms=document.getElementsByTagName('input');
const email=forms[0];
const password=forms[1];
email.oninput=handleInputs;
password.oninput=handleInputs;