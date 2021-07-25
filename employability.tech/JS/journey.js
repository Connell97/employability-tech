// Make an array for images
// Make an array for accompanying info
// Variables for 'previous' and 'next' buttons

const prevStepBtn = document.querySelector('#journey-info-previous');
const nextStepBtn = document.querySelector('#journey-info-next');

const changeInfo = (event) => {
    let btnClicked = event.target;
    let journeyImg = document.querySelector('#journey-img');
    let journeyInfo = document.querySelector('#journey-info-text');

    if (btnClicked == prevStepBtn) {
        journeyInfo.innerHTML = "<p>Testing</p>"
    }

    else {
        journeyInfo.innerHTML = "<p>Balls</p>"
    }
}

prevStepBtn.addEventListener('click', changeInfo);
nextStepBtn.addEventListener('click', changeInfo);