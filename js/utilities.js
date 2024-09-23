function getInputFiledAmountById(id){
   const inputValue =document.getElementById(id).value;
   const inputValueNumber =parseFloat(inputValue);
   return inputValueNumber;
}

function getTextFiledAmountById(id){
    const textValue =document.getElementById(id).innerText;
    const textValueNumber = parseFloat(textValue);
    return textValueNumber;
}