var bal = 20000
var disp ="Welcome, click on any to start"

function turnOn(){
    userBalance.innerText = bal
    userDetails.innerText = disp
}
function depositMoney(){
    userDetails.innerText ="kindly enter amount to deposit"
}
 
function makeTransaction(){
    if(userDetails.innerText =="kindly enter amount to deposit"){
        bal= Number(userInput.value) + bal
        userBalance.innerText="your balance is" + bal
        alert("Transaction Successful")
        userDetails.innerText= disp
    }
    else if(userDetails.innerText=="kindly enter amount to withdraw"){
        bal =  bal-Number(userInput.value)
        userBalance.innerText="Your current balance is" + bal
        alert("Transaction is Successful")
        userDetails.innerText= disp
    }
    else if( userDetails.innerText="Enter Amount to Transfer"){
        bal= bal-Number(userInput.value)
        userBalance.innerText="Your current balance is" + bal
        alert("Transaction is Successful")
    }
    else if( userDetails.innerText="Enter Amount "){
        bal= bal-Number(userInput.value)
        userBalance.innerText="Your current balance is" + bal
        alert("Transaction is Successful")
    }
   

    else {
        alert("Select the right option")
    }
  
}

function withDrawMoney(){
    userDetails.innerText="kindly enter amount to withdraw"
   
}
function cancel(){
    userInput.value=""
}
function trans(){
    userDetails.innerText="Enter Amount to Transfer"
}
function air(){
    userDetails.innerText="Enter Amount  "
}