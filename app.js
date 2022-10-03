const $menu = document.querySelector('.menu');
const $hamburger = document.querySelector('.hamburger');
const $iconClose = document.querySelector('.icon-close');

$hamburger.addEventListener('click', openMenu);
$iconClose.addEventListener('click', closeMenu);

function openMenu () {
    $menu.classList.remove('hidden');
}

function closeMenu () {
    $menu.classList.add('hidden');
}



