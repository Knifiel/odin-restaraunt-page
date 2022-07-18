import baristaPic from "./images/baristaCat.jpg";
import serverPic from './images/serverCat.jpg';


export const initAbout = () =>{
    const desc1 = 'Sebastian is a barista with more than 12 years of of experience and best in industry skills. You won\'t find coffee made better by someone other than him.'
    const desc2 = 'Although Laura worked with us not that long, she receives best best customer ratings from the start. The most cheerful and attentive server you could ever imagine. Don\'t forget to request a smile!'
    
    const about = document.getElementById('about-page');
    about.toggleAttribute('active');

    const content = document.getElementById('content');
    
    const wrapper = document.createElement('div');
    wrapper.classList.add('employee-list');
    
    
    wrapper.appendChild(createEmployeeCard('Sebastian', desc1, baristaPic));
    wrapper.appendChild(createEmployeeCard('Laura', desc2, serverPic));
    content.appendChild(wrapper);
}

const createEmployeeCard = (empname, desc, picture) =>{
    const card = document.createElement('div');
    card.classList.add('employee-card');
    
    const cardName = document.createElement('h2');
    cardName.textContent = empname; 

    const empPic = document.createElement('img');
    empPic.src = picture;

    const description = document.createElement('p');
    description.textContent = desc;
    
    card.appendChild(cardName);
    card.appendChild(empPic);
    card.appendChild(description);

    return card;
}