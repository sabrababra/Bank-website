document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositFeild= document.getElementById('deposit-amount');
    const depositInFloat=parseFloat(depositFeild.value);
    //console.log(typeof(depositInFloat));
   const depositFelidValue= document.getElementById('deposit-field');
   const depositAmount= parseFloat(depositFelidValue.innerText);
   //console.log(typeof(depositAmount));
   depositFeild.value='';
   const finalAmount= depositInFloat+depositAmount;
   //console.log(depositInFloat);
   depositFelidValue.innerText=finalAmount;

   const blncTotal= document.getElementById('blnc-total');
   const blncTotalInt= parseFloat(blncTotal.innerText);
   //console.log(typeof(blncTotalInt));
   const blncTotalAmount= blncTotalInt+depositInFloat;
   blncTotal.innerText=blncTotalAmount;



})
