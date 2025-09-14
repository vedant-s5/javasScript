# Projects realted to Async

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Findex.html)

# solution code 

## project 1 solution

```javascript
//gernerate a random color
//it will be generated through hex values

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
// console.log(randomColor());


const startChanginColor = function(){
  if(!intervalId){
    intervalId = setInterval(changeBgColor,1000)
  }
  
  function changeBgColor(){
    document.body.style.backgroundColor = randomColor()
  }
}

let intervalId;

const stopChangingColor = function(){
  
  clearInterval(intervalId)
  intervalId = null;
  console.log("STOPPED")
}

document.querySelector('#start').addEventListener('click',startChanginColor)

document.querySelector('#stop').addEventListener('click', stopChangingColor)

```

## project 2 solution

```javascript
const insert = document.querySelector('#insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>
      <table>
        <tr>
          <th>Key</th>
          <th>KeyCode</th>
          <th>Code</th>
        </tr>
        <tr>
          <td>${e.key === " " ? "space" : e.key}</td>
          <td>${e.keyCode}</td>
          <td>${e.code}</td>
        </tr>
      </table>
    </div>`;
});

```