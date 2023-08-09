const btnMenu = document.querySelector('.logo-menu');
const menu = document.querySelector('.liste-nav');

btnMenu.addEventListener('click',() => {
    menu.classList.toggle('active')
})

const allLists = document.querySelectorAll('.item-nav');

allLists.forEach(item => {
    item.addEventListener('click', () => {
         menu.classList.toggle('active') 
    })
})