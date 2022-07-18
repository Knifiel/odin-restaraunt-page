import { initMainPage } from './mainpage.mjs';
import { initMenu } from './menu.mjs';
import { initAbout } from './about.mjs';

export function makeNav(){
    const content = document.getElementById('content');
    content.innerHTML = "";

    const head = document.createElement('h1');
    head.textContent = "Cafe Autumn Blend";
    head.classList.add('main-sign', 'headline', 'leaves-font');

    const mainPage = document.createElement('h2');
    mainPage.textContent = `About Cafe`;
    mainPage.classList.add('wooden-sign', 'leaves-font');
    mainPage.id = 'main-page';

    const menu = document.createElement('h2');
    menu.textContent = `Menu`;
    menu.classList.add('wooden-sign', 'leaves-font');
    menu.id = 'menu-page';

    const about = document.createElement('h2');
    about.textContent = `About us`;
    about.classList.add('wooden-sign', 'leaves-font');
    about.id = 'about-page';

    content.appendChild(mainPage);
    content.appendChild(menu);
    content.appendChild(about);
    content.appendChild(head);

    mainPage.addEventListener('mousedown', ()=>{
        if(!mainPage.hasAttribute('active')){
        makeNav();
        initMainPage()}});
    
    menu.addEventListener('mousedown', ()=>{
        if(!menu.hasAttribute('active')){
        makeNav();
        initMenu()}});

    about.addEventListener('mousedown', ()=>{
        if(!about.hasAttribute('active')){
        makeNav();
        initAbout()}});
}