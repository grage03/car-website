const menu = document.querySelector('#menu__toggle');
const company = document.querySelector('.header__company');
const navigation = document.querySelector('.header__nav');
company.style.display = 'flex';

menu.addEventListener("click", () => {
    if (company.style.display == 'flex') {
        company.style.display = 'none';
        navigation.style.display = 'flex';
    } else {
        company.style.display = 'flex';
        navigation.style.display = 'none';
    }
});