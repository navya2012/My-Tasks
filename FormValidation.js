document.getElementById("submit").style.backgroundColor = "green";
document.getElementById("submit").style.color = "white";
document.getElementById("submit").style.padding = "5px 10px";
document.getElementById("submit").style.marginLeft = "40%";


let submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function(e){
    e.preventDefault();

    let firstname = document.getElementById('fname');
    let lastname = document.getElementById('lname');
    let username = document.getElementById('uname');
    let email = document.getElementById('mail');
    let password = document.getElementById('pwd');
    let rd1 = document.getElementById("rd1");
    let rd2 = document.getElementById("rd2");
    let rd3 = document.getElementById("rd3");
    let rd4 = document.getElementById("rd4");
    let cb = document.getElementById("cb");
    let select = document.getElementById("selection");
    let number = document.getElementById("num");

    
    validateTheForm(firstname,lastname,username,email,password,rd1,rd2,rd3,rd4,cb,select,number);
});

function  validateTheForm(firstname,lastname,username,email,password,rd1,rd2,rd3,rd4,cb,select,number){
    if(firstname.value == ""){
        let firstnameerr = document.getElementById("fnameErr");
        firstnameerr.innerText = "**please enter the first name";
        firstnameerr.style.color = "red";
        firstnameerr.style.marginLeft ="120px";
    }
    else{
        fnameErr.innerText = "";
    }

    if(lastname.value == ""){
        let lastnameerr = document.getElementById("lnameErr");
        lastnameerr.innerText = "**please enter the last name";
        lastnameerr.style.color = "red";
        lastnameerr.style.marginLeft ="120px";
    }
    else{
        lnameErr.innerText = "";
    }
    
    if(username.value == ""){
        let usernameerr = document.getElementById("unameErr");
        usernameerr.innerText = "**please enter the valid username";
        usernameerr.style.color = "red";
        usernameerr.style.marginLeft ="120px";
    }
    else{
        unameErr.innerText = "";
    }

    let pattern = /^[A-za-z0-9]{8,15}[@]{1}[a-z]+[.]{1}[a-z]{2,4}$/
    
    if(pattern.test(email.value)=="" ){
       
        let emailerr = document.getElementById("mailErr");
        emailerr.innerText = "**please enter the valid mailID";
        emailerr.style.color = "red";
        emailerr.style.marginLeft ="120px";
    }
    else{
       
       mailErr.innerText = "";
    }
    
    if(password.value.length <=6){
        let passworderr = document.getElementById("pwdErr");
        passworderr.innerText = "**password must be longer than 6 characters";
        passworderr.style.color = "red";
        passworderr.style.marginLeft ="50px";
    }
    else if(password.value.length >=12){
        let passworderr = document.getElementById("pwdErr");
        passworderr.innerText = "**password must be less than 12 characters";
        passworderr.style.color = "red";
        passworderr.style.marginLeft ="50px";
    }   
    else{
        pwdErr.innerText = "";
    }

   if(rd1.checked){
        rd1.innerText = "";
    }
    else if(rd2.checked){
        rd2.innerText = "";
    }
    else if(rd3.checked){
        rd3.innerText = "";
    }
    else if(rd4.checked){
        rd4.innerText = "";
    }
    else {
        alert("please select the payment mode");
    }

    if(cb.checked){
        cb.innerText = "";
    }
    else {
        alert("please click the checkbox");
    }

    if(select.value == "select your location"){
        alert("please select your location");
       
    }
    
    let numpattern = /^\d{10}$/;
    if(numpattern.test(number.value) ==""){
        let numbererr = document.getElementById("numberErr");
        numbererr.innerText = "**please enter valid phone number";
        numbererr.style.color = "red";
        numbererr.style.marginLeft = "120px";
    }
    else{
        numberErr.innerText = "";
    }
    
}


