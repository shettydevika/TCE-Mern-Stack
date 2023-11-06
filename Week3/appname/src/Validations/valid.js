//validation-->
// regex:- regular expresssion used for checking similar patterns

//email validation
const validEmail=(email) =>{
    return email.match(/^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/)
}

//password validation
const validPass=(password)=>{
    return password.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$/)
}

//mobile validation
const validPhone=(mobile)=>{
    return mobile.match(/^\d{10}$/)
}

module.exports={validEmail,validPass,validPhone}