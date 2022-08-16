document.getElementById('btn-submit').addEventListener('click',function(){

    const userEmail= document.getElementById('user-email').value;
    const userPass= document.getElementById('user-pass').value;
    if(userEmail=="prome@gmail.com" && userPass==="prome123"){
        location.href = "bank.html";
    }else{
        alert ('Please enter valid info');
        // console.log(userEmail);
        // console.log(userPass);
        document.getElementById('user-email').value='';
        document.getElementById('user-pass').value='';
        
        
    }
   
});