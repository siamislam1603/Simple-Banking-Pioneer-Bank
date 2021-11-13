const loginBtn=document.getElementById('submit-btn');
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function handleClick(){
    const emailClassName=document.querySelector('#email-form input').className;
    const passwordClassName=document.querySelector('#password-form input').className;
    const loginSection=document.getElementById('login-section');
    const accountSection=document.getElementById('account-section');
    if(emailClassName=='form-control is-valid' && passwordClassName=='form-control is-valid'){
        loginSection.style.display='none';
        accountSection.style.display='block';
    }
}
function handleLoginInputs(event){
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
        document.querySelector(targetId+' input').setAttribute('class','form-control is-valid');
        document.querySelector(targetId+' .invalid-feedback').style.display='none';
    }
}
function handleTransactionInputs(event){
    const element=event.target;
    const balance=document.querySelector('#balance h4 span');
    const balanceValue=parseFloat(balance.innerHTML);
    const elementValue=+element.value;
    console.log(elementValue,balanceValue);
    if(element.name=='withdraw'){
        if(elementValue>0 && elementValue<=balanceValue){
            element.setAttribute('class','form-control is-valid');
        }
        else{
            element.setAttribute('class','form-control is-invalid');
        }
    }
    else{
        if(elementValue>0)
            element.setAttribute('class','form-control is-valid');
        else
            element.setAttribute('class','form-control is-invalid');
    }
}
loginBtn.onclick=handleClick;
const forms=document.getElementsByTagName('input');
const email=forms[0];
const password=forms[1];
email.oninput=handleLoginInputs;
password.oninput=handleLoginInputs;
const depositBtn=document.getElementById('deposit-btn');
const depositInput=document.querySelector('#deposit-transaction input');
const withdrawInput=document.querySelector('#withdraw-transaction input');
depositInput.oninput=handleTransactionInputs;
withdrawInput.oninput=handleTransactionInputs;