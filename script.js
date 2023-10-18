const dice= document.querySelector('.btn');
const advice=document.querySelector('.advice');
const adviceId=document.querySelector('.advice__title')
dice.addEventListener("click", function(){
    getApi();
});


async function getApi(){
    try { const response = await fetch("https://api.adviceslip.com/advice");
    if (!response.ok) throw new Error(response.status);

     const data = await response.json();
     console.log(data);
    advice.textContent=data.slip.advice;
adviceId.textContent=`Advice #${data.slip.id}` } 
    
     catch (error){ console.log('Error:', error)}
}

