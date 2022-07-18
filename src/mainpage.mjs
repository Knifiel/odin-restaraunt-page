import heroPic from './images/pic.png';

export function initMainPage(){

const content = document.getElementById('content');
const main = document.getElementById('main-page');
main.toggleAttribute('active');

const hero = document.createElement('div');
hero.classList.add('hero');
const heroImage = document.createElement('img');
heroImage.src = heroPic;


const description = document.createElement('p');
description.textContent = 'In our cafe you will taste all of the different shades of autumn!';
description.classList.add('description');
description.classList.add('chalkboard');

content.appendChild(hero);
hero.appendChild(heroImage);
content.appendChild(description);
}