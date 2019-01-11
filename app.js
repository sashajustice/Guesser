var inputField = document.querySelector('.input-field');
var guessBtn = document.querySelector('.guess-btn')
var clearBtn = document.querySelector('.clear-btn')
var resetBtn = document.querySelector('.reset-btn')
var randNumber = Math.floor(Math.random() * 99 + 1)


inputField.addEventListener('keyup', disableEnablebtn)
guessBtn.addEventListener('click', randomNumber)


function disableAndEnablebtn () {
  if(inputField.value.length > 0)  {
    guessBtn.disabled = false;
    clearBtn.disabled = false;
  } else {
  guessBtn.disabled = true;
  clearBtn.disabled = true;
  }
}

function randomNumber() {
 console.log(randNumber)
 return randNumber
}
