function cal() {
    let number1=document.querySelector("#num1").value;
    let opr=document.querySelector("#opr").value;
    let number2=document.querySelector("#num2").value;
    let res;
    if(opr=="add"){
        res=parseFloat(number1)+parseFloat(number2);
        document.querySelector("#result").innerHTML = 
        "Result is "+ " " +res+ " ";
    }
    if(opr=="sub"){
        res=parseFloat(number1) - parseFloat(number2);
        document.querySelector("#result").innerHTML = 
        "Result is "+" " +res+ " ";
    }
    if(opr=="mul"){
        res=parseFloat(number1)*parseFloat(number2);
        document.querySelector("#result").innerHTML = 
        "Result is "+ " " +res+ " ";
    }
    if(opr=="div"){
        res=parseFloat(number1)/parseFloat(number2);
        document.querySelector("#result").innerHTML = 
        "Result is "+ " " +res+ " ";
    }
}