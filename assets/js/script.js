//Game should not start until the DOM is finished loading
document.addEventListener('DOMContentLoaded');

let buttons = document.getElementsByTagName('button');

for (let button of buttons) {
    button.addEventListener('click, function(') {
        if (this.getAttribute('data-type') === 'submit') {
            alert('You clicked Submit!');
        } else {
            let fameType = this.getAttribute('data-type');
            runGame();
        }
    }
}

//Placement of computer ships
function () {
    let location;
    let randomStartIndex = Math.floor(Math.random() * width * width)
    document.getElementsByClassName('ships-container')
}

//Hit or miss a ship
function didHit() {
    let isShip = userFire === userHit[0];

    if (isShip) {
        alert(You hit a ship);
    } else {
        alert('You missed');
    }
}