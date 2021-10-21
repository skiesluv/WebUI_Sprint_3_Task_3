const buttonLive = document.querySelector('.btn');

const buttonStyle = document.querySelector('button');

buttonStyle.style.cssText = "margin-bottom: 15px;"

function mouseOn() {
    buttonLive.insertAdjacentHTML('beforeend', `<p style="margin: 0px;"> Mouse on me! </p>`)
}

function press() {
    buttonLive.insertAdjacentHTML('beforeend', `<p style="margin: 0px;"> I was pressed! </p>`)
}

function mouseOut() {
    buttonLive.insertAdjacentHTML('beforeend', `<p style="margin: 0px;"> Mouse is not on me! </p>`)
}