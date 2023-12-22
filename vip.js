
var createNewBoardButton = document.getElementById('createBtn');
var bigBox = document.getElementById('house');
var btn = document.getElementById('button');
var binput = document.getElementById('input');

let valueInput = [];

function createBox(inputValue) {
  var box = document.createElement('div');
  box.innerHTML = inputValue;
  box.className = 'sixth1';
  bigBox.style.display = 'none';
  btn.style.display = 'none';
  binput.style.display = 'none'; 
  sixx.prepend(box);
}

function handleCreateButtonClick() {
  bigBox.style.display = 'flex';
  binput.style.display = 'block';
  btn.style.display = 'block';
}

createNewBoardButton.addEventListener('click', handleCreateButtonClick);

var contain = document.getElementById('sixx');

function handClick() {
  let inputValue = binput.value;
  createBox(binput.value); 
  savedata(inputValue); 
}

btn.addEventListener('click', handClick);


function savedata(inputValue) {
  valueInput.push(inputValue);
  localStorage.setItem('valueInput', JSON.stringify(valueInput));
  console.log("Stored Values:", valueInput);
}

function reload() {
  let storedValues = JSON.parse(localStorage.getItem('valueInput'));
  if (storedValues && Array.isArray(storedValues)) {
    for (let i = 0; i < storedValues.length; i++) {
      createBox(storedValues[i]);
    }
  }
}
reload();


