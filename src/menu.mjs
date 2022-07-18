const menuArr = [
    {item: 'Americano', calories: "10", price: 5},
    {item: 'Espresso', calories: '5', price: 5},
    {item: 'Latte', calories: '130-160', price: 5},
    {item: 'Cappuccino', calories: '100-130', price: 8},
    {item: 'Mocha', calories: '240-270', price: 6},
    {item: 'Flat White', calories: '110', price: 4},
    {item: 'Hot Chocolate', calories: '230-260', price: 9},
    {item: 'Autumn Tea Blend', calories: '30', price: 7},
    {item: 'Pumpkin Coffee', calories: '140', price: 8},
    {item: 'Pumpkin Pie', calories: '243', price: 15},
    {item: 'Pumpkin Soup', calories: '71', price: 10},
]

export const initMenu = () => {
const content = document.getElementById('content');

const menu = document.getElementById('menu-page');
menu.toggleAttribute('active');

const wrapper = document.createElement('div');
wrapper.classList.add('menu', 'chalkboard');

populateMenu(menuArr, wrapper);

content.appendChild(wrapper);
}

const populateMenu = (arr, div) => {
arr.forEach(element => {
    const item = document.createElement('div');
    
    const itemName = document.createElement("h3");
    itemName.textContent = element.item;
    
    const itemCalories = document.createElement('p');
    itemCalories.textContent = `${element.calories}kcal`;
    
    const itemPrice = document.createElement('p');
    itemPrice.textContent = `${element.price}\$`;

    item.appendChild(itemName);
    item.appendChild(itemPrice);
    item.appendChild(itemCalories);
    div.appendChild(item);
});
}