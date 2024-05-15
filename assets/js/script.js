//Game should not start until the DOM is finished loading
document.addEventListener('DOMContentLoaded', function () {});

let squares = document.getElementsByClassName('square');

for (let square of squares) {
    square.addEventListener('click', function () {
        if (square.classList.contains('ships')) {
            square.style.backgroundColor = 'red';
            didHit();
        } else {
            square.style.backgroundColor = 'black';
        }
        //   if (this.getAttribute('data-type') === 'submit') {
        //    alert('You clicked Submit!');
        //   } else {
        //       let gameType = this.getAttribute('data-type');
        //       runGame();
        //   }
    })
}

let ships = [carrier, battleship, cruiser, submarine, destroyer];

const width = 10;
shipLocation();
shipLocation();
shipLocation();
shipLocation();
shipLocation();
//Placement of computer ships
function shipLocation() {
    let randomStartIndex = Math.floor(Math.random() * width * width);

    if (!squares[randomStartIndex].classList.contains('ships')) {


        squares[randomStartIndex].classList.add('ships');
        squares[randomStartIndex].style.backgroundColor = 'green';
    } else {
        shipLocation()
    }
}

//Hit or miss a ship
function didHit() {
    let isShip = userFire === userHit[0];

    if (isShip) {
        alert('You hit a ship');
    } else {
        alert('You missed');
    }
}

//Get the current victories from the DOM and increase it with 1
function incrementVictory() {
    let oldVictory = parseInt(document.getElementById('victory').innertext);
    document.getElementById('victory').innerText = ++oldScore;
}

//Get the current defeats from the DOM and increase it with 1
function incrementDefeat() {
    let oldDefeat = parseInt(document.getElementById('defeat').innertext);
    document.getElementById('defeat').innerText = ++oldScore;
}