// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let amount=document.getElementById('wallet');
  let data=localStorage.getItem('wallet_amount');
  amount.innerHTML=data;
  
  function submitData(){
    let arr=[]; 
  let name=document.getElementById('user_name').value;
  let seats=document.getElementById('number_of_seats').value;
arr.push(name,seats);

localStorage.setItem('info',arr);
  
  }

  