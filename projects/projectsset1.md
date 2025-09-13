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
