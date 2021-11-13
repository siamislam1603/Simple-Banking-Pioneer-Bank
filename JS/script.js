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
    var element=event.target;
    if(element.type=='email'){
        var isValid=validateEmail(element.value);
        var targetId='#email-form';
    }
    else{
        if(element.value.length>7)
            var isValid=true;
        else
            var isValid=false;
        var targetId='#password-form';
    }
    if(!isValid){
        document.querySelector(targetId+' input').setAttribute('class','form-control is-invalid');
        document.querySelector(targetId+' .invalid-feedback').style.display='block';
    }
    else{
        console.log('sdfkjsdkjfhksjdh');
        document.querySelector(targetId+' input').setAttribute('class','form-control is-valid');
        document.querySelector(targetId+' .invalid-feedback').style.display='none';
    }
}
loginBtn.onclick=handleClick;
const forms=document.getElementsByTagName('input');
const email=forms[0];
const password=forms[1];
email.oninput=handleInputs;
password.oninput=handleInputs;