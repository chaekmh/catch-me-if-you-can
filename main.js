
// make things disappear first
// let adGone = document.getElementsByClassName('szppmdbYutt__middle-slot-promo')
// adGone[0].remove();

let buttonGone = document.getElementsByTagName('center');
buttonGone[1].remove();

// Make a new Button
let newButton = document.createElement('button');
let newButton2 = document.createElement('button');

newButton.setAttribute('id', 'newButton');
newButton2.setAttribute('id', 'newButton2');

newButton.innerText = 'Google Search';
newButton2.innerText = `I'm Feeling Lucky`;

// find a place for the button to live in
// let buttonContainer = document.getElementsByClassName('FPdoLc tfB0Bf');
// buttonContainer[0].appendChild(newButton);
// buttonContainer[0].appendChild(newButton2);
let body = document.getElementsByClassName('L3eUgb');
let container = document.createElement('div');
container.setAttribute('id', 'container');
// container is 
container.setAttribute('style', 'height: 900px; width: 1400px; z-index: 3; position: absolute;');
container.appendChild(newButton);
container.appendChild(newButton2);
body[0].appendChild(container);


// Add styling sheet

function addAttributes (buttons) {
    buttons.setAttribute('style', `background-color: #f8f9fa; border: 1px solid #f8f9fa; border-radius: 4px; color: #3c4043; font-family: arial,sans-serif;font-size: 14px; margin: 11px 4px; padding: 0 16px; line-height: 27px; height: 36px; min-width: 54px; text-align: center; user-select: none; left: 825px; top: 450px; position: absolute; z-index: 3`)
    // buttons.setAttribute('onclick','mouseOver()');
}
function addAttributes2 (buttons) {
  buttons.setAttribute('style', 'background-color: #f8f9fa; border: 1px solid #f8f9fa; border-radius: 4px; color: #3c4043; font-family: arial,sans-serif;font-size: 14px; margin: 11px 4px; padding: 0 16px; line-height: 27px; height: 36px; min-width: 54px; text-align: center; user-select: none; left: 975px; top: 450px; position: absolute; z-index: 3')
}


addAttributes(newButton);
addAttributes2(newButton2);

// Pixel is 1400 by 900 

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

document.getElementById('newButton').addEventListener('mouseenter', function() {
  console.log("hello i'm button 1")
  const button1= document.getElementById('newButton')
  button1.style.left = `${getRandomArbitrary(0.2,0.9)*1300}px`;
  button1.style.top = `${getRandomArbitrary(0.2,0.9)*800}px`;
});

document.getElementById('newButton2').addEventListener('mouseenter', function() {
  console.log("hello i'm button 2")
  const button2 = document.getElementById('newButton2')
  button2.style.left = `${getRandomArbitrary(0.2,0.9)*1300}px`;
  button2.style.top = `${getRandomArbitrary(0.2,0.9)*800}px`;
});
