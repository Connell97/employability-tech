// Make an array for images
// Make an array for accompanying info
// Variables for 'previous' and 'next' buttons

const prevStepBtn = document.querySelector('#journey-info-previous');
const nextStepBtn = document.querySelector('#journey-info-next');
const timelineDots = document.querySelectorAll('.dot-container');
const journeyImg = document.querySelector('#journey-img');
const journeyInfo = document.querySelector('#journey-info-text');

let currentStep = 0;

let journeyImgSrc = [
    'Journey1.jpg',
    'Journey2.jpg',
    'Journey3.jpg',
    'Journey4.jpg',
    'Journey5.jpg',
    'Journey6.jpg',
    'Journey7.jpg',
    'Journey8.jpeg'
]

let journeyInfoText = [
    '<p>The first week of your journey is all about getting to know eachother.</p><p>We’ll talk about your interests, experience, goals, and everything in between to help find the best way to get you where you want to be. If you don’t know where that is, don’t worry! We can figure it out together.</p><p>As well as planning your journey, you’ll have the opportunity to get a better idea of what we do and how we work; to ask any questions and get to know us better.</p><p>You’ll set goals and determine how to achieve them, you’ll meet new people, make new connections, and perhaps most importantly, you’ll take the first step towards the future you most want.</p>',
    '<p>Bacon ipsum dolor amet short ribs short loin doner filet mignon sirloin. Bacon chuck ham hock meatball. Fatback beef tenderloin rump, andouille tail porchetta tongue drumstick. Frankfurter rump burgdoggen drumstick. Doner turkey swine frankfurter porchetta meatloaf pancetta boudin shoulder. Short ribs biltong tenderloin cupim strip steak.</p>',
    '<p>T-bone bacon chicken kielbasa tongue jowl venison drumstick pork chop hamburger capicola pork loin ribeye. Biltong kevin cow, shankle pig venison brisket bacon chislic meatloaf. Pastrami t-bone filet mignon hamburger flank jowl turducken. Spare ribs kielbasa sausage venison tri-tip jerky andouille capicola. Shank meatloaf tri-tip meatball. Boudin pancetta prosciutto ham filet mignon. Pancetta ground round hamburger pork chop pork jowl andouille salami pork belly cupim brisket spare ribs rump.</p>',
    '<p>Shank boudin sausage fatback hamburger ground round alcatra shankle prosciutto ham hock venison. Cupim tongue leberkas kevin ground round bresaola pig frankfurter biltong short loin ball tip. Biltong bresaola chicken, frankfurter salami bacon spare ribs short loin pancetta filet mignon cow pig. Meatball rump shank, meatloaf leberkas prosciutto kielbasa ground round t-bone. Salami filet mignon rump swine, shoulder jerky hamburger strip steak landjaeger chislic. Strip steak ham capicola kielbasa meatball t-bone salami. Tenderloin spare ribs tongue flank, prosciutto pork jerky burgdoggen pastrami andouille jowl cow.</p>',
    '<p>Drumstick frankfurter sirloin landjaeger turkey capicola, rump shankle ham andouille. Jowl meatball tail ribeye corned beef beef ribs chuck short loin. Tongue chuck prosciutto ribeye tri-tip meatball filet mignon porchetta. Shoulder biltong spare ribs tenderloin shank swine salami strip steak jowl. Burgdoggen meatball pork loin bresaola ball tip sirloin. Biltong venison shoulder cow capicola, meatloaf landjaeger t-bone swine beef ham hock ribeye ball tip. Cupim ground round landjaeger shoulder tri-tip.</p>',
    '<p>Tail spare ribs meatloaf cow pig pork belly filet mignon turkey doner leberkas. Cupim capicola burgdoggen shank chicken salami ham hock sirloin pork belly flank picanha chislic meatball buffalo. Jerky corned beef shoulder kielbasa burgdoggen bacon fatback porchetta bresaola. Tail shoulder pancetta, short loin pork chop alcatra frankfurter tongue pork loin hamburger flank pork. Landjaeger pork loin tri-tip cupim pancetta brisket bacon burgdoggen. Pancetta beef ribs prosciutto, pork chop ground round shankle landjaeger tenderloin.</p>',
    '<p>Pork loin meatloaf strip steak flank, tongue tail cupim shank sausage. Brisket ball tip turkey, cow chuck ham pork chop beef ribs pork loin. Kielbasa ham hock turducken, sausage pork loin shank ham. Kielbasa porchetta pork loin tenderloin kevin, sirloin pork pastrami sausage biltong strip steak tail andouille.</p>',
    '<p>Leberkas spare ribs shoulder turkey, boudin meatball ham hock chicken pig landjaeger chislic drumstick shankle pancetta. Landjaeger cow brisket pork loin, shoulder corned beef strip steak short loin ground round pork chop pig drumstick filet mignon bresaola pork. Alcatra hamburger burgdoggen jerky sirloin ground round leberkas brisket strip steak tenderloin shank capicola. Shoulder strip steak brisket rump sirloin t-bone kielbasa turkey beef ribs venison. Ball tip spare ribs kielbasa, burgdoggen corned beef t-bone hamburger sausage chuck short ribs picanha porchetta chislic.</p>'
]

// const changeInfo = (event) => {
//     let btnClicked = event.target;
//     let journeyImg = document.querySelector('#journey-img');
//     let journeyInfo = document.querySelector('#journey-info-text');

//     if (btnClicked == prevStepBtn) {
//         journeyInfo.innerHTML = '<p>Testing</p>'
//     }

//     else {
//         journeyInfo.innerHTML = '<p>Balls</p>';
//         currentStep+=1;
//         journeyImg.src = `IMG/${journeyImgSrc[currentStep]}`;
//     }
// }

const changeDot = (event) => {
    let btnClicked = event.target;
    for (let i = 0; i < timelineDots.length; i++) {
        if (timelineDots[i].classList.contains('active')) {
            timelineDots[i].classList.remove('active');
            if (btnClicked == nextStepBtn) {
                if (i < 7) {
                    i += 1;
                }
                else {
                    i = 0;
                }
            }
            else if (btnClicked == prevStepBtn) {
                if (0 < i) {
                    i-=1;
                }
                else {
                    i = 7;
                }
            }
            console.log(i);
            timelineDots[i].classList.add('active');
            journeyImg.src = `IMG/${journeyImgSrc[i]}`;
            journeyInfo.innerHTML = `${journeyInfoText[i]}`;

        }
    }
}

// prevStepBtn.addEventListener('click', changeInfo);
// nextStepBtn.addEventListener('click', changeInfo);
prevStepBtn.addEventListener('click', changeDot);
nextStepBtn.addEventListener('click', changeDot);

// const prevDot = () => {
//     for (let i = 0; i < timelineDots.length; i++) {
//         if (timelineDots[i].classList.contains('active')) {
//             timelineDots[i].classList.remove('active');
//             if (i > 0) {
//                 i-=1;
//             }
//             else {
//                 i = 7;
//             }
//             timelineDots[i].classList.add('active');
//         }
//     }
// }

// const nextDot = () => {
//     for (let i = 0; i < timelineDots.length; i++) {
//         if (timelineDots[i].classList.contains('active')) {
//             timelineDots[i].classList.remove('active');
//             if (i < 7) {
//                 i+=1;
//             }
//             else {
//                 i = 0;
//             }
//             timelineDots[i].classList.add('active');
//         }
//     }
// }

// if (event.target == prevStepBtn) {
//     if (i < 7) {

//     }
//     else {

//     }
// }
// else if (event.target == nextStepBtn) {
//     if (i < 7) {

//     }
//     else {

//     }
// }