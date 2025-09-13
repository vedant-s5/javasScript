# Projects realted to DOM

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Findex.html)

# solution code

## project 1

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);//event tagert likhke ye pta chlta h ki vo event aa kha se rha hai
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'purple'){
      body.style.backgroundColor = e.target.id //abi hamne css main is block ka color purple nhi kra hai to koi color nhi hai abs button dikhega but click krne pe purple hi dega
    }
    
  })
})


```

## project 2 solution

```javascript
const form = document.querySelector('form');
//this usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault(); /* ye hamare submit button ka jo default kaam hai usse hone se rokega kyuki ho skta hai submit button pe click krke khi server pe req bhej de*/
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  /*ham ye height aur weight ki value callback ke andar islia likh rhe hai kyuki agar bahar access krenge to jaise hi hamari site run hoti empty value uske andar store ho jayegi joki ham nhi chahte islia jab ham submit button ko click kre tabi vo enetered values ko sath main call kre islia callback ke andar likhte hai*/

  /*abi ye jo height and weight lia hai iske upper calculation krke code fhat skta hai to ham ispe checks laga lete hai */

  if (height === ' ' || height < 0 || isNaN(height)) {
    results.innerHTML = `please enter a valid height ${height}`;
  }
  else if (weight === ' ' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please enter a valid weight ${weight}`;
  }
  else {
    const bmi = (weight / ((height*height)/10000)).toFixed(2)
    //show the result
    results.innerHTML = `<span>${bmi}</span>`
  }
});

```

## prpject 3 solution

```javascript
// const clock = document.getElementById('clock')
const clock = document.querySelector('#clock')


setInterval(function (){
  let date = new Date()
  // console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString();

},1000)/*1000 islia likha hai cuz js main time and date miliseconds main hote hia */
```

## project 4 soution

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess =
  []; /*jisse ham apne user ko uske guessed numbers ka array dikha sake*/
let numGuess = 1; // ye iske lia hai ki uska ye 1st guess hai aur jais hi ye num 10 pe jayega vaise hi submit button uske lia lock ho jayega */

let playGame = true; /* this allows the user to play games, is codition ko pass kre bina game nhi chalega*/

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  /*if user na valid number diya hai ya nhi khi user ne 100 se bada no. to ni diya, alphabet to ni dala*/
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a valid number more than 1');
  } else if (guess > 100) {
    alert('Please enter a valid number less than 100');
  } else {
    prevGuess.push(guess); //ye hamne array main push kr diya hai, kya pta vo uske last attempt ho uske baad to hame push nhi krna hai
    if (numGuess === 11) {
      cleanUpGuesses(guess);
      displayMessage(`game over. random number was ${randomNumber}`);
      endGame();
    } else {
      cleanUpGuesses(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  //upper validation hua hai, isse ham user ko msg print krenge ki sai hai ya nhi hai*/
  if (guess === randomNumber) {
    displayMessage(`you guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is too low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is too high`);
  }
}

function cleanUpGuesses(guess) {
  // values ko clean krega kyuki next values put krni hai same values ni leni hai aur guess remain ko update krega values ko update krega
  userInput.value = ''; // ab ismain userinput ki value ko update kr denge ham kyuki purani value ko clean bi toh krna hai
  guessSlot.innerHTML += `${guess}, `; // ye values ko push krta jayega, guessed values ko
  numGuess++; // aur ye num of guesses ko increase krta hai/no. of attempts
  remaining.innerHTML = `${10 - numGuess}`;
}

function displayMessage(message) {
  //ye hamara DOM ke sath connect krega multiple task krega ye
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

// ab ha, game ko end bi krna chahte hai aur new game start bi krna chahte hai ab uske lia new func create krenge

function endGame() {
  userInput.value = ''; //sabse pehle value ko clean krna padega
  // ab jo userInput hai usmain user aur values input na kr paye uske lia
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id = "newGame">Start new Game</h2>`;
  playGame = false
  startOver.appendChild(p);
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click',function(e){
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = []
    newGuess = 1
    guessSlot.insertHTML = `${11 - numGuess} `
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true
  })

}

```