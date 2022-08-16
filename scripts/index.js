// Store the wallet amount to your local storage with key "amount"
let data=0;

  wallet.innerHTML=data_amount;
let add_money=()=>{
  
  let amount=  document.getElementById('amount').value;
  data+=Number(amount);
  
  localStorage.setItem('wallet_amount',data);
  let wallet=document.getElementById('wallet');
// let data_amount=localStorage.getItem('wallet_amount');
  
}
