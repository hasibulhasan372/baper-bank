// Withdraw Amount Deducted from the total balance 

// Step : 1 Withdraw Button AddEventlistener  
    document.getElementById('withdraw-btn').addEventListener('click', function(){

    // Step: 2 Call The withdraw input field 
    const inputWithdrawElement = document.getElementById('withdraw-input');
    const inputWithdrawElementValueString = inputWithdrawElement.value;
    const inputWithdrawAmount = parseFloat(inputWithdrawElementValueString);
    // Empty the Input Field 
    inputWithdrawElement.value = '';
          // Error message 
      if(isNaN(inputWithdrawAmount)){
        alert('please give a number')
        return;
    };
  

    


            // Step : 3 Call the withdraw Area 
            const withdrawArea = document.getElementById('withdraw-area');
            const previousWithdrawString = withdrawArea.innerText;
            const previousWithdrawTotal = parseFloat(previousWithdrawString);
            
          
    

    // step : Deducted the withdraw amount with the balance 
    const balanceCall = document.getElementById('balance-field');
    const balanceAmountString = balanceCall.innerText;
    const balanceAmount = parseFloat(balanceAmountString);

    if( inputWithdrawAmount > balanceAmount){
        alert('tor baper eto tk nai');
        return
        
    };

    
    const addedWithdraw = previousWithdrawTotal + inputWithdrawAmount;
    withdrawArea.innerText = addedWithdraw;

      // step : 4 Added the Withdraw amount with the Withdraw area 

    const totalBalance = balanceAmount - inputWithdrawAmount;
    balanceCall.innerText = totalBalance; 

    

    // last Step : make the withdraw input empty 
    

});
