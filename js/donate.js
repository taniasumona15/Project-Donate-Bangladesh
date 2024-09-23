document.getElementById('btn-donate-now').addEventListener('click',function(){

    const inputFieldAmount=getInputFiledAmountById('input-field-amount'); 
    // console.log(inputFieldAmount);

    const amountDecrease=getTextFiledAmountById('amount-decrease');
    // console.log(amountDecrease);

    const btnIncreaseCoin=getTextFiledAmountById('btn-increase-coin');
    // console.log(btnIncreaseCoin);

    if(isNaN(inputFieldAmount) || inputFieldAmount<=0){
        alert('Please enter a valid amount');
        return;
    }
    if(isNaN(amountDecrease) || amountDecrease<=0){
        alert('Please enter a valid amount');
        return;
    }

     const addDonation =inputFieldAmount+btnIncreaseCoin;
    // console.log(addDonation);


    const decreaseAmount =amountDecrease-inputFieldAmount;

    document.getElementById('btn-increase-coin').innerText=addDonation;
    document.getElementById('amount-decrease').innerText=decreaseAmount;

    //add to transaction history
    const div=document.createElement('div');
    div.innerText=`${inputFieldAmount}${'donate-title'}`



    //one way 

    // const inputFiledAmount=document.getElementById('input-field-amount').value;
    // const inputFiledAmountNumber=parseFloat(inputFiledAmount);
    // // console.log(inputFiledAmountNumber);

    // const btnIncreaseCoin=document.getElementById('btn-increase-coin').innerText;
    // const btnIncreaseCoinNumber=parseInt(btnIncreaseCoin);
    // // console.log(btnIncreaseCoin);

    // const amountDecrease =document.getElementById('amount-decrease').innerText;
    // const amountDecreaseNumber = parseFloat(amountDecrease);
    // // console.log(amountDecrease);

    // if(isNaN(inputFiledAmountNumber) || inputFiledAmountNumber<=0){
    //     alert('Please enter a valid amount');
    //     return;
    
    // }

    // if(isNaN(amountDecreaseNumber)|| amountDecreaseNumber<=0){
    //     alert ('Please enter a valid amount');
    //     return;
    // }
  
    // const addDonation =inputFiledAmountNumber+btnIncreaseCoinNumber;
    // // console.log(addDonation);


    // const decreaseAmount =amountDecreaseNumber-inputFiledAmountNumber;

    // document.getElementById('btn-increase-coin').innerText=addDonation;
    // document.getElementById('amount-decrease').innerText=decreaseAmount;

    

    
})

document.getElementById('btn-donate-now2').addEventListener('click',function(){

    const inputFieldAmount2=getInputFiledAmountById('input-field-amount2'); 
    // console.log(inputFieldAmount);

    const amountDecrease=getTextFiledAmountById('amount-decrease');
    // console.log(amountDecrease);

    const btnIncreaseCoin2=getTextFiledAmountById('btn-increase-coin2');
    // console.log(btnIncreaseCoin);

    if(isNaN(inputFieldAmount2) || inputFieldAmount2<=0){
        alert('Please enter a valid amount');
        return;
    }
    if(isNaN(amountDecrease) || amountDecrease<=0){
        alert('Please enter a valid amount');
        return;
    }

     const addDonation =inputFieldAmount2+btnIncreaseCoin2;
    console.log(addDonation);


    const decreaseAmount =amountDecrease-inputFieldAmount2;

    document.getElementById('btn-increase-coin2').innerText=addDonation;
    document.getElementById('amount-decrease').innerText=decreaseAmount;
})

document.getElementById('btn-donate-now3').addEventListener('click',function(){


    const inputFieldAmount3=getInputFiledAmountById('input-field-amount3'); 
    console.log(inputFieldAmount3);

    const amountDecrease=getTextFiledAmountById('amount-decrease');
    // console.log(amountDecrease);

    const btnIncreaseCoin3=getTextFiledAmountById('btn-increase-coin3');
    // console.log(btnIncreaseCoin);

    if(isNaN(inputFieldAmount3) || inputFieldAmount3<=0){
        alert('Please enter a valid amount');
        return;
    }
    if(isNaN(amountDecrease) || amountDecrease<=0){
        alert('Please enter a valid amount');
        return;
    }

     const addDonation =inputFieldAmount3+btnIncreaseCoin3;
    console.log(addDonation);


    const decreaseAmount =amountDecrease-inputFieldAmount3;

    document.getElementById('btn-increase-coin3').innerText=addDonation;
    document.getElementById('amount-decrease').innerText=decreaseAmount;
})

document.getElementById('btn-donate-now4').addEventListener('click',function(){


    const inputFieldAmount4=getInputFiledAmountById('input-field-amount4'); 
    // console.log(inputFieldAmount4);

    const amountDecrease=getTextFiledAmountById('amount-decrease');
    // console.log(amountDecrease);

    const btnIncreaseCoin4=getTextFiledAmountById('btn-increase-coin4');
    // console.log(btnIncreaseCoin4);

    if(isNaN(inputFieldAmount4) || inputFieldAmount4<=0){
        alert('Please enter a valid amount');
        return;
    }
    if(isNaN(amountDecrease) || amountDecrease<=0){
        alert('Please enter a valid amount');
        return;
    }

     const addDonation =inputFieldAmount4+btnIncreaseCoin4;
    console.log(addDonation);


    const decreaseAmount =amountDecrease-inputFieldAmount4;

    document.getElementById('btn-increase-coin4').innerText=addDonation;
    document.getElementById('amount-decrease').innerText=decreaseAmount;
})

document.getElementById('btn-donate-now5').addEventListener('click',function(){


    const inputFieldAmount5=getInputFiledAmountById('input-field-amount5'); 
    // console.log(inputFieldAmount4);

    const amountDecrease=getTextFiledAmountById('amount-decrease');
    // console.log(amountDecrease);

    const btnIncreaseCoin5=getTextFiledAmountById('btn-increase-coin5');
    // console.log(btnIncreaseCoin4);

    if(isNaN(inputFieldAmount5) || inputFieldAmount5<=0){
        alert('Please enter a valid amount');
        return;
    }
    if(isNaN(amountDecrease) || amountDecrease<=0){
        alert('Please enter a valid amount');
        return;
    }

     const addDonation =inputFieldAmount5+btnIncreaseCoin5;
    console.log(addDonation);


    const decreaseAmount =amountDecrease-inputFieldAmount5;

    document.getElementById('btn-increase-coin5').innerText=addDonation;
    document.getElementById('amount-decrease').innerText=decreaseAmount;
})

document.getElementById('btn-donate-now6').addEventListener('click',function(){


    const inputFieldAmount6=getInputFiledAmountById('input-field-amount6'); 
    // console.log(inputFieldAmount4);

    const amountDecrease=getTextFiledAmountById('amount-decrease');
    // console.log(amountDecrease);

    const btnIncreaseCoin6=getTextFiledAmountById('btn-increase-coin6');
    // console.log(btnIncreaseCoin4);

    if(isNaN(inputFieldAmount6) || inputFieldAmount6<=0){
        alert('Please enter a valid amount');
        return;
    }
    if(isNaN(amountDecrease) || amountDecrease<=0){
        alert('Please enter a valid amount');
        return;
    }

     const addDonation =inputFieldAmount6+btnIncreaseCoin6;
    console.log(addDonation);


    const decreaseAmount =amountDecrease-inputFieldAmount6;

    document.getElementById('btn-increase-coin6').innerText=addDonation;
    document.getElementById('amount-decrease').innerText=decreaseAmount;
})



