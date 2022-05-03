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
    document.getElementById("user_typ")
}

