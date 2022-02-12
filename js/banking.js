function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmount = inputField.value;
    const inputAmountValue = parseFloat(inputAmount);
    // clear deposit inputfield area 
    inputField.value = '';
    return inputAmountValue;
}

function updateTotalField(totalId, amountValue) {
    const totalElement = document.getElementById(totalId);
    const totalElementText = totalElement.innerText;
    const previousElementTotal = parseFloat(totalElementText);
    totalElement.innerText = amountValue + previousElementTotal;
}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalAmount = balanceTotal.innerText;
    const balanceTotalAmountValue = parseFloat(balanceTotalAmount);
    return balanceTotalAmountValue;
}

function updateBalance(amountValue, addOrMinus) {
    const balanceTotal = document.getElementById('balance-total');
    /* const balanceTotalAmount = balanceTotal.innerText;
    const balanceTotalAmountValue = parseFloat(balanceTotalAmount); */
    const balanceTotalAmountValue = getCurrentBalance();
    if (addOrMinus == true) {
        balanceTotal.innerText = balanceTotalAmountValue + amountValue;
    }
    else {
        balanceTotal.innerText = balanceTotalAmountValue - amountValue;
    }
}

document.getElementById('submit-deposit').addEventListener
    ('click', function () {
        /* const depositInputField = document.getElementById('deposit-input');
        const depositAmount = depositInputField.value; // input field er vitor theke value pete chaile .value diye value tule ante hoi
        const depositAmountValue = parseFloat(depositAmount); */

        const depositAmountValue = getInputValue('deposit-input');
        if (depositAmountValue > 0) {
            updateTotalField('deposit-total', depositAmountValue);
            updateBalance(depositAmountValue, true);
        }


        // get and update current deposit total 
        /*  const currentDeposit = document.getElementById('deposit-total'); // deposit show korar html text jaiga eta
         const currentDepositAmount = currentDeposit.innerText; // html p,h3 ei type er tag er vitore value dhukate innerText use kore
         const currentDepositAmountValue = parseFloat(currentDepositAmount);
         currentDeposit.innerText = depositAmountValue + currentDepositAmountValue; // deposit input field thake tule ana value html tag er vitore show korbe */



        // update balance after deposit
        /* 
        const balanceTotal = document.getElementById('balance-total');
        const balanceTotalAmount = balanceTotal.innerText;
        const balanceTotalAmountValue = parseFloat(balanceTotalAmount);
        balanceTotal.innerText = balanceTotalAmountValue + depositAmountValue; */

    });

// handle withdraw 
document.getElementById('submit-withdraw').addEventListener
    ('click', function () {
        /* const withdrawInputField = document.getElementById('withdraw-input');
        const withdrawAmount = withdrawInputField.value;
        // console.log(withdrawAmount);
        const withdrawAmountValue = parseFloat(withdrawAmount); */

        const withdrawAmountValue = getInputValue('withdraw-input');
        const currentBalance = getCurrentBalance();
        if (withdrawAmountValue > 0 && withdrawAmountValue < currentBalance) {
            updateTotalField('withdraw-total', withdrawAmountValue);
            updateBalance(withdrawAmountValue, false);
        }
        // get and update current withdraw total 
        /* 
        const currentWithdraw = document.getElementById('withdraw-total');
        const currentWithdrawAmount = currentWithdraw.innerText;
        const currentWithdrawAmountValue = parseFloat(currentWithdrawAmount);
        currentWithdraw.innerText = withdrawAmountValue + currentWithdrawAmountValue; */



        // update balance after withdraw
        /* 
        const balanceTotal = document.getElementById('balance-total');
        const balanceTotalAmount = balanceTotal.innerText;
        const balanceTotalAmountValue = parseFloat(balanceTotalAmount);
        balanceTotal.innerText = balanceTotalAmountValue - withdrawAmountValue; */


        // // clear withdraw input field
        // withdrawInputField.value = '';
    })