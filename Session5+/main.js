let FirstNum = document.getElementById("FN");
let SecondNum = document.getElementById("SN");
let Operation = document.getElementById("OP");
let Result = document.getElementById("RE");
Operation.addEventListener("blur",() => {
    switch(Operation.value){
        case "Summation":
            Result.value = parseInt(FirstNum.value) + parseInt(SecondNum.value);
            break;
        case "Subtraction":
            Result.value = parseInt(FirstNum.value) - parseInt(SecondNum.value);
            break;
        case "Multiplication":
            Result.value = parseInt(FirstNum.value) * parseInt(SecondNum.value);
            break;
        case "Division":
            Result.value = parseInt(FirstNum.value) / parseInt(SecondNum.value);
            break;
    }
})
// Operation.addEventListener("blur",() => {
//     if(Operation.value=="sum"){
//         Result.value =parseInt(FirstNum.value) + parseInt(SecondNum.value);
//     }
// })
