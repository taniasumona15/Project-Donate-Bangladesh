
// 1
document.getElementById('btn-donate-now').addEventListener('click',function(){

    const inputFieldAmount=getInputFiledAmountById('input-field-amount'); 
    // console.log(inputFieldAmount);

    const amountDecrease=getTextFiledAmountById('amount-decrease');
    // console.log(amountDecrease);

    const btnIncreaseCoin=getTextFiledAmountById('btn-increase-coin');
    // console.log(btnIncreaseCoin);

    if(isNaN(inputFieldAmount) || inputFieldAmount<=0 || inputFieldAmount>amountDecrease){
        alert('Please enter a valid amount');
        return;
    }
    if(isNaN(amountDecrease) || amountDecrease<=0){
        alert('Please enter a valid amount');
        return;
    }

     const addDonation =inputFieldAmount+btnIncreaseCoin;
    // console.log(addDonation);

    //modalDialog 
    

        //add to transaction history
        const donateTitle=document.getElementById('donate-title').innerText;

        const data =new Date();
        const dateValue =data.toLocaleDateString();
        const timeValue =data.toLocaleTimeString();
        

        const div=document.createElement('div');
        div.className=' border-2 border-solid border-gray-300 rounded-lg p-8 mx-20 my-6';
        div.innerHTML=`
        <h3 class="text-2xl font-bold">${inputFieldAmount}tk is donated to ${donateTitle}</h3>
        <p class="font-semibold text-xl px-10 py-4">Date: ${dateValue} at Time: ${timeValue} </p>

        `;
        document.getElementById('history-section').appendChild(div);
     

    
    const decreaseAmount =amountDecrease-inputFieldAmount;

    document.getElementById('btn-increase-coin').innerText=addDonation;
    document.getElementById('amount-decrease').innerText=decreaseAmount;







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



// ----------------2-----------

document.getElementById('btn-donate-now2').addEventListener('click',function(){

    const inputFieldAmount2=getInputFiledAmountById('input-field-amount2'); 
    // console.log(inputFieldAmount);

    const amountDecrease=getTextFiledAmountById('amount-decrease');
    // console.log(amountDecrease);

    const btnIncreaseCoin2=getTextFiledAmountById('btn-increase-coin2');
    // console.log(btnIncreaseCoin);

    if(isNaN(inputFieldAmount2) || inputFieldAmount2<=0 || inputFieldAmount2>amountDecrease){
        alert('Please enter a valid amount');
        return;
    }
    if(isNaN(amountDecrease) || amountDecrease<=0){
        alert('Please enter a valid amount');
        return;
    }

     const addDonation =inputFieldAmount2+btnIncreaseCoin2;
    console.log(addDonation);

            //add to transaction history
        const donateTitle2=document.getElementById('donate-title2').innerText;

        const data =new Date();
        const dateValue =data.toLocaleDateString();
        const timeValue =data.toLocaleTimeString();
        

        const div=document.createElement('div');
        div.className=' border-2 border-solid border-gray-300 rounded-lg p-8 mx-20 my-6';
        div.innerHTML=`
        <h3 class="text-2xl font-bold">${inputFieldAmount2}tk is donated to ${donateTitle2}</h3>
        <p class="font-semibold text-xl px-10 py-4">Date: ${dateValue} at Time: ${timeValue} </p>

        `;
        document.getElementById('history-section').appendChild(div);
     



    const decreaseAmount =amountDecrease-inputFieldAmount2;

    document.getElementById('btn-increase-coin2').innerText=addDonation;
    document.getElementById('amount-decrease').innerText=decreaseAmount;
})

// --------------3-------------

document.getElementById('btn-donate-now3').addEventListener('click',function(){


    const inputFieldAmount3=getInputFiledAmountById('input-field-amount3'); 
    console.log(inputFieldAmount3);

    const amountDecrease=getTextFiledAmountById('amount-decrease');
    // console.log(amountDecrease);

    const btnIncreaseCoin3=getTextFiledAmountById('btn-increase-coin3');
    // console.log(btnIncreaseCoin);

    if(isNaN(inputFieldAmount3) || inputFieldAmount3<=0 || inputFieldAmount3>amountDecrease){
        alert('Please enter a valid amount');
        return;
    }
    if(isNaN(amountDecrease) || amountDecrease<=0){
        alert('Please enter a valid amount');
        return;
    }

     const addDonation =inputFieldAmount3+btnIncreaseCoin3;
    console.log(addDonation);

        //add to transaction history
        const donateTitle3=document.getElementById('donate-title3').innerText;

        const data =new Date();
        const dateValue =data.toLocaleDateString();
        const timeValue =data.toLocaleTimeString();
        

        const div=document.createElement('div');
        div.className=' border-2 border-solid border-gray-300 rounded-lg p-8 mx-20 my-6';
        div.innerHTML=`
        <h3 class="text-2xl font-bold">${inputFieldAmount3}tk is donated to ${donateTitle3}</h3>
        <p class="font-semibold text-xl px-10 py-4">Date: ${dateValue} at Time: ${timeValue} </p>

        `;
        document.getElementById('history-section').appendChild(div);
     



    const decreaseAmount =amountDecrease-inputFieldAmount3;

    document.getElementById('btn-increase-coin3').innerText=addDonation;
    document.getElementById('amount-decrease').innerText=decreaseAmount;
})

// -------------4-----------------

document.getElementById('btn-donate-now4').addEventListener('click',function(){


    const inputFieldAmount4=getInputFiledAmountById('input-field-amount4'); 
    // console.log(inputFieldAmount4);

    const amountDecrease=getTextFiledAmountById('amount-decrease');
    // console.log(amountDecrease);

    const btnIncreaseCoin4=getTextFiledAmountById('btn-increase-coin4');
    // console.log(btnIncreaseCoin4);

    if(isNaN(inputFieldAmount4) || inputFieldAmount4<=0 || inputFieldAmount4>amountDecrease){
        alert('Please enter a valid amount');
        return;
    }
    if(isNaN(amountDecrease) || amountDecrease<=0){
        alert('Please enter a valid amount');
        return;
    }

     const addDonation =inputFieldAmount4+btnIncreaseCoin4;
    console.log(addDonation);

        //add to transaction history
        const donateTitle4=document.getElementById('donate-title4').innerText;

        const data =new Date();
        const dateValue =data.toLocaleDateString();
        const timeValue =data.toLocaleTimeString();
        

        const div=document.createElement('div');
        div.className=' border-2 border-solid border-gray-300 rounded-lg p-8 mx-20 my-6';
        div.innerHTML=`
        <h3 class="text-2xl font-bold">${inputFieldAmount4}tk is donated to ${donateTitle4}</h3>
        <p class="font-semibold text-xl px-10 py-4">Date: ${dateValue} at Time: ${timeValue} </p>

        `;
        document.getElementById('history-section').appendChild(div);
     



    const decreaseAmount =amountDecrease-inputFieldAmount4;

    document.getElementById('btn-increase-coin4').innerText=addDonation;
    document.getElementById('amount-decrease').innerText=decreaseAmount;
})

// -----------5--------

document.getElementById('btn-donate-now5').addEventListener('click',function(){


    const inputFieldAmount5=getInputFiledAmountById('input-field-amount5'); 
    // console.log(inputFieldAmount4);

    const amountDecrease=getTextFiledAmountById('amount-decrease');
    // console.log(amountDecrease);

    const btnIncreaseCoin5=getTextFiledAmountById('btn-increase-coin5');
    // console.log(btnIncreaseCoin4);

    if(isNaN(inputFieldAmount5) || inputFieldAmount5<=0 ||inputFieldAmount5>amountDecrease){
        alert('Please enter a valid amount');
        return;
    }
    if(isNaN(amountDecrease) || amountDecrease<=0){
        alert('Please enter a valid amount');
        return;
    }

     const addDonation =inputFieldAmount5+btnIncreaseCoin5;
    console.log(addDonation);

            //add to transaction history
        const donateTitle5=document.getElementById('donate-title5').innerText;

        const data =new Date();
        const dateValue =data.toLocaleDateString();
        const timeValue =data.toLocaleTimeString();
        

        const div=document.createElement('div');
        div.className=' border-2 border-solid border-gray-300 rounded-lg p-8 mx-20 my-6';
        div.innerHTML=`
        <h3 class="text-2xl font-bold">${inputFieldAmount5}tk is donated to ${donateTitle5}</h3>
        <p class="font-semibold text-xl px-10 py-4">Date: ${dateValue} at Time: ${timeValue} </p>

        `;
        document.getElementById('history-section').appendChild(div);
     



    const decreaseAmount =amountDecrease-inputFieldAmount5;

    document.getElementById('btn-increase-coin5').innerText=addDonation;
    document.getElementById('amount-decrease').innerText=decreaseAmount;
})

// ---------6---------

document.getElementById('btn-donate-now6').addEventListener('click',function(){


    const inputFieldAmount6=getInputFiledAmountById('input-field-amount6'); 
    // console.log(inputFieldAmount4);

    const amountDecrease=getTextFiledAmountById('amount-decrease');
    // console.log(amountDecrease);

    const btnIncreaseCoin6=getTextFiledAmountById('btn-increase-coin6');
    // console.log(btnIncreaseCoin4);

    if(isNaN(inputFieldAmount6) || inputFieldAmount6<=0 || inputFieldAmount6>=amountDecrease){
        alert('Please enter a valid amount');
        return;
    }
    if(isNaN(amountDecrease) || amountDecrease<=0){
        alert('Please enter a valid amount');
        return;
    }

     const addDonation =inputFieldAmount6+btnIncreaseCoin6;
    console.log(addDonation);

            //add to transaction history
        const donateTitle6=document.getElementById('donate-title6').innerText;

        const data =new Date();
        const dateValue =data.toLocaleDateString();
        const timeValue =data.toLocaleTimeString();
        

        const div=document.createElement('div');
        div.className=' border-2 border-solid border-gray-300 rounded-lg p-8 mx-20 my-6';
        div.innerHTML=`
        <h3 class="text-2xl font-bold">${inputFieldAmount6}tk is donated to ${donateTitle6}</h3>
        <p class="font-semibold text-xl px-10 py-4">Date: ${dateValue} at Time: ${timeValue} </p>

        `;
        document.getElementById('history-section').appendChild(div);
     



    const decreaseAmount =amountDecrease-inputFieldAmount6;

    document.getElementById('btn-increase-coin6').innerText=addDonation;
    document.getElementById('amount-decrease').innerText=decreaseAmount;
})



