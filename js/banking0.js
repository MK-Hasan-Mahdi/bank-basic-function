// handle deposit button event
document.getElementById('submit-deposit').addEventListener
    ('click',
        function () {
            // get deposit amount
            const depositInput = document.getElementById('deposit-input');
            const newDepositAmount = depositInput.value;


            const depositTotal = document.getElementById('deposit-total');
            const previousDepositAmount = depositTotal.innerText;
            const newDepositTotal = previousDepositAmount + newDepositAmount;
            depositTotal.innerText = newDepositAmount;

            depositTotal.innerText = newDepositTotal;

            // clear deposit input field
            depositInput.value = '';
        })