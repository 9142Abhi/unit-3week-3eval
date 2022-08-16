// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let wallet = document.getElementById('wallet');
let data=localStorage.getItem('wallet_amount');
wallet.innerHTML=data;


// let keys = `http://www.omdbapi.com/?i=tt3896198&apikey=e28acac9`;
let key=`e28acac9`;
async function getData(){
  let query=document.getElementById('search').value;
  try{
    
    let res= await fetch(`https://www.omdbapi.com/?apikey=${key}&s=${query}`);
    let {Search} =await res.json();
    // console.log(Search);
    // return data.serch;
    // let arr_videos=items;
    append(Search);
  }
  catch(err){ }
}


function append(videos){
  let container=document.getElementById('movies');
container.innerHTML=null;
videos.forEach(function(el){
  let div=document.createElement('div');
  let p=document.createElement('p');
  let image=document.createElement('img');
  let btn=document.createElement('button');
  btn.setAttribute('class','book_now');
  btn.innerText="Book_Now";
 
  p.innerText=el.Title;
  image.src=el.Poster;
  console.log(el.Title)

  div.append(image,p,btn);
  container.append(div);



})

}



