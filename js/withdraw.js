document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    const previousWithdrawAmount = getElementValueById('withdraw-total');
    const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
    setElementValueById ('withdraw-total', newWithdrawTotal);
    const previousBalanceTotal = getElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setElementValueById ('balance-total', newBalanceTotal);

})