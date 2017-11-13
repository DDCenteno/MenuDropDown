var submenu = document.getElementsByClassName('submenu');
for (var i = 0; i < submenu.length; i++) {
    submenu[i].addEventListener('click',showMenu);
}

function showMenu() {
 console.log(this);
}