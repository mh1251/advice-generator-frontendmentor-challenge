let api = 'https://api.adviceslip.com/advice' //for a single advice; return it as an object
let btn = document.getElementById('btn');
let quote = document.getElementById('quote');
let adviceID =  document.getElementById('advice-id')

async function getCurrentAdvice() {
   let currentAdvice = await fetch(api).then((response) => response.json());
   quote.innerHTML = '"'+currentAdvice.slip.advice+'"';
   quote.classList.add("show")
   adviceID.innerHTML = 'A D V I C E  #' + currentAdvice.slip.id;
}

  function fade() {
   quote.classList.remove("show")
}

document.onload = getCurrentAdvice()

btn.addEventListener("click", () => {
 fade();
 getCurrentAdvice();
})

