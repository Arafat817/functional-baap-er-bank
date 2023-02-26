document.getElementById('btn-deposit').addEventListener('click', function(){
    const newDepositAmount = getInputFieldValueById('deposit-field');

    const previousDepositTotal = getElementValueById('deposit-total');
   
    //calculate new deposit total
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    //set deposit total value
    setElementValueById('deposit-total', newDepositTotal);
    //get previous balance by using the function
    const previousBalanceTotal = getElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setElementValueById('balance-total', newBalanceTotal);

    

})