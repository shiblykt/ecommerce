function login_validation(){
    s = 1
    username = document.getElementById("userName").value
    userpassword = document.getElementById("userPassword").value
    if(username==''){
        document.getElementById("userName").style.border = "1px red solid"
        s=0
    }else{
        document.getElementById("userName").style.border = "1px green solid"
        s = 1
    }
    if(userpassword==''){
        document.getElementById("userPassword").style.border = "1px red solid"
        s=0
    }else{
        document.getElementById("userPassword").style.border = "1px green solid"
        s = 1
    }
    if(s==0){
        return false
    }
}


function signup_validation(){
    st=1
    usertype = document.getElementById("usertyp")
    if(usertyp.value=="reseller"){
        var a=1
    }
    else{
        // validate firstname
        fname = document.getElementById("fname")
        if(fname.value==""){
            fname.style.border = "1px red solid"
            st = 0
        }else{
            fname.style.border = "1px green solid"
        }

        // validate dob
        dob = document.getElementById("dob")
        if(dob.value==""){
            dob.style.border = "1px red solid"
            st = 0
        }else{
            dob.style.border = "1px green solid"
        }

        // validate address
        adrs = document.getElementById("adrs")
        if(adrs.value==""){
            adrs.style.border = "1px red solid"
            st = 0
        }else{
            adrs.style.border = "1px green solid"
        }

        // validate country
        country = document.getElementById("cntry")
        if(cntry.value==""){
            cntry.style.border = "1px red solid"
            st = 0
        }else{
            cntry.style.border = "1px green solid"
        }

        // validate mobile number
        var mre = /^\d{10}$/
        mobile = document.getElementById("userMobile")
        if(mobile.value.match(mre)){
            mobile.style.border = "1px green solid"
        }else{
            mobile.style.border = "1px red solid"
            st = 0
        }

        // validate email
        var ere = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        email = document.getElementById("userEmail")
        if(email.value.match(ere)){
            email.style.border = "1px green solid"
        }else{
            email.style.border = "1px red solid"
            st = 0
        }

        // validate whether password input is empty
        password = document.getElementById("userPassword")
        password2 = document.getElementById("passwordCnf")
        if(password.value==""){
            password.style.border = "1px red solid"
            st = 0
        }else{
            password.style.border = "1px green solid"
        }

        // validate whether password and cnfirm passwd are equal
        
        if(password.value!=password2.value){
            password2.style.border = "1px red solid"
            document.getElementById("pswerror").innerHTML = "passwords are not matching"
            st = 0
        }else{
            password2.style.border = "1px red solid"
             
        }


        if(st==0){
            return false
        }
    }
}

