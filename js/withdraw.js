document.getElementById('btn-withdraw').addEventListener('click',function(){
   const withdrawAmount= document.getElementById('withdraw-amount');
   const withdrawAmountInt= parseFloat(withdrawAmount.value);
   console.log(typeof(withdrawAmountInt),withdrawAmountInt);
   if(isNaN(withdrawAmountInt)===true){
    alert ("Please Enter a amount");
    withdrawAmount.value='';
   }else{
    const withdrawFeild= document.getElementById('withdraw-field');
   const withdrawFeildAmount= parseFloat(withdrawFeild.innerText);
    const total=withdrawAmountInt+withdrawFeildAmount;
   withdrawFeild.innerText=total;
   withdrawAmount.value='';
   //console.log(withdrawFeildAmount);
   const blanceTotal=document.getElementById('blnc-total');
   const blanceTotalInt= parseFloat(blanceTotal.innerText);
   //console.log(typeof(blanceTotalInt),blanceTotalInt);
   const final= blanceTotalInt-withdrawAmountInt;
   if(final<0){
    alert ('Not enough amount');
    withdrawAmountInt=00;
   }else{
    blanceTotal.innerText=final;
   }
   }
   


   
})