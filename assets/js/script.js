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

function () {
    let location;
    let randomStartIndex = Math.floor(Math.random() * width * width)
    document.getElementsByClassName('ships-container')
}