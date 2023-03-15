const data = [
  "Those that know their God shall be strong and do exploits",
  "For God so loved the world that he gave his only son",
  "For thou art a shield for me, my glory you lift my hands",
  "How mighty are you oh lord! how mighty are your works",
  "We have not received the spirit of fear but of love, boldness and sound mind",
  "In the begining, God created the heavens and the earth",
  "There is time for everything under the surface of th earth",
  "To him who sits at the heaven, he shall smile at the gentiles in their folly",
  "God is faithful, yes! for his mercies endureth forever.",
  // ['g', 'o']
];


const contentDiv = document.querySelector(".content");
const textareaEl = document.querySelector("textarea");

function generateQuotes() {
  const randomNumber = Math.floor(Math.random() * data.length);
  return data[randomNumber]
}


function renderQuotes() {
  contentDiv.innerText = null
  generateQuotes().split('').forEach(function(char){
    const spanEl = document.createElement('span')
    spanEl.innerText = char
    contentDiv.appendChild(spanEl)
  })
  textareaEl.value = ''
  // console.log(result)
}
// [f,o,r, ,G,o,d]
// <span>f</span>
// typing - fo

textareaEl.addEventListener('keyup', function(e){
  const inputArr = e.target.value.split('')
  const allSpans = document.querySelectorAll('span')
  let correct = true
  allSpans.forEach(function(sp, index){
    if(inputArr[index]==null){
      sp.classList.remove('incorrect')
      sp.classList.remove('correct')
      correct = false
      return
    }else if(inputArr[index]==sp.innerText){
      sp.classList.add('correct')
      sp.classList.remove('incorrect')
    }else{
      sp.classList.add('incorrect')
      sp.classList.remove('correct')  
      correct = false    
    }
  })
  if(correct) renderQuotes()
})

renderQuotes()

// event listeners
const buttonEl = document.querySelector("button");
// const textareaEl = document.querySelector('textarea')

// textareaEl.addEventListener('keydown', function(){
//   console.log('this user is typing...')
// })
// buttonEl.addEventListener('click', function(){
//   console.log('this user is clicking...')
// })

//how to add or insert a new div

// class of content
// const contentDiv = document.querySelector('.content')

// const mercyContainer = document.createElement('div')

// mercyContainer.classList.add('mercy-container')

// mercyContainer.innerText = 'Mercy besides blu'

// contentDiv.appendChild(mercyContainer)

// console.log(contentDiv.innerText)

// const inputEl = document.querySelector(".textarea");
// const textContainer = document.querySelector(".content");
// const timerEl = document.querySelector('.timer')

// inputEl.addEventListener("keyup", () => {
//   let correct = true;
//   const spansEl = document.querySelectorAll("span");
//   const inputArr = inputEl.value.split("");
//   spansEl.forEach((char, idx) => {
//     const charIdx = inputArr[idx];
//     if (charIdx == undefined) {
//       char.classList.remove("correct");
//       char.classList.remove("incorrect");
//       correct = false;
//       return;
//     }
//     if (char.innerText === charIdx) {
//       char.classList.add("correct");
//       char.classList.remove("incorrect");
//     } else {
//       char.classList.add("incorrect");
//       char.classList.remove("correct");
//       correct = false;
//     }
//   });
//   if (correct) {
//       textContainer.classList.add("animate");
//       setTimeout(() => {
//         renderQuotes();
//     }, 1000);
//   }
// });

// function generateQuotes() {
//   return data[Math.floor(Math.random() * data.length)];
// }

// function renderQuotes() {
//   const quote = generateQuotes();
//   textContainer.innerHTML = "";
//   textContainer.classList.remove('animate')
//   quote.split("").forEach((char) => {
//     const charSpan = document.createElement("span");
//     charSpan.innerText = char;
//     textContainer.appendChild(charSpan);
//   });
//   inputEl.value = "";
//   startTimer()
// }

// let startTime
// function startTimer(){
//     timerEl.innerText = 0
//     startTime = new Date()
//     setInterval(()=>{
//         timerEl.innerHTML = getTimer()
//     }, 1000)
// }

// function getTimer(){
//     return Math.floor((new Date() - startTime)/1000)
// }

// renderQuotes();
