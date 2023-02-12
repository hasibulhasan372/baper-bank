// Checked valid User and PassWord 
document.getElementById('btn-submit').addEventListener('click', function(){
    // Need : Value from the Input field  
    // step : 1 set a ID to the email input tag  
    // step : 2 get the input tag by getElementById and set a variable 
    // step : 3 get the input value by .value attribute 
    
    const inputField = document.getElementById('input-field');
    const input = inputField.value;
    
    // Need : Value from the Password field  
    // step : 1 set a ID to the Password input tag  
    // step : 2 get the input tag by getElementById and set a variable 
    // step : 3 get the input value by .value attribute 

    const passWordField = document.getElementById('password-field');
    const passWord = passWordField.value;
    
    // Need : Matched email and password 

    if ( input === 'hasib@gmail.com' && passWord === '1234'){

        // learn : how to connect page by JS 

       window.location.href  = 'bank.html';
    }
    else{
        alert('go to hell')
    }; 

});