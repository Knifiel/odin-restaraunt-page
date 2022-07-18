import { initMainPage } from './mainpage.mjs';
import { makeNav } from './nav.mjs';
import './style.css';

const content = document.createElement('div');
content.id = 'content';
document.body.appendChild(content);

makeNav();
initMainPage();

