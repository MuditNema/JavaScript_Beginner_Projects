
let cap = /[A-Z]/;
let sml = /[a-z]/;
let num = /[0-9]/;
let special = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?+]/;

function CheckValidation(){
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let mob = document.getElementById('mob').value;
    let pass = document.getElementById('pass').value;
    document.getElementById('error-fname').innerHTML=""
    document.getElementById('error-lname').innerHTML=""
    document.getElementById('error-mob').innerHTML = ""
    document.getElementById('error-pass').innerHTML = ""
    let res=false;
    let count=4;
    if(num.test(fname) || special.test(fname)){
        count--;
        document.getElementById('error-fname').innerHTML = "*Use only Aphabets"
    }
    if(num.test(lname) || special.test(lname)){
        count--;
        document.getElementById('error-lname').innerHTML = "*Use only Aphabets"
    }
    if(cap.test(mob) || sml.test(mob) || special.test(mob)  || mob.length!==10){
        count--;
        document.getElementById('error-mob').innerHTML = "*Must be 10 digit Number"
    }
    if(!(cap.test(pass) && sml.test(pass) && special.test(pass) && num.test(pass) && pass.length > 8)){
        count--;
        document.getElementById('error-pass').innerHTML = "*Use Uppercase,lowercase,symbol and numbers. Must be greater than 8 characters"
    }
    if(count !== 4){
        res=false;
    }
    else{
        res=true;
    }
    return res;
}