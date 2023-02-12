// Deposit Money  
// get the button 
document.getElementById('deposit-btn').addEventListener('click', function(){
   
    // get the input Deposit value  
    const depositField = document.getElementById('input-deposit-field');
    const depositInputValueSting = depositField.value; 
    const depositInputValue = parseFloat(depositInputValueSting);
    
    
    // Put the value into the Deposit Area 
    const depositArea = document.getElementById('deposit-area');
    const depositAmountSting = depositArea.innerText;
    const depositAmount = parseFloat(depositAmountSting);
    // depositArea.innerText = depositInputValue;
    

    // Adding Deposit value with the Previous Deposit  
    const depositResult = depositAmount + depositInputValue;
    depositArea.innerText = depositResult;
   

    // adding the deposit Amount with the balance field 
    const balanceField = document.getElementById('balance-field');
    const balanceAmountString = balanceField.innerText;
    const balanceAmount = parseFloat(balanceAmountString);
    // console.log(typeof balanceAmount)
    balanceField.innerText = balanceAmount + depositInputValue;
    
    



    // make the deposit input field empty 
    depositField.value ='';
});