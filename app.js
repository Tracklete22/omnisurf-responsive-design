
/* for header mobile functionality */



var menu = document.getElementById('nav-list');

menu.style.maxHeight = '0px';
function menutoggle() {

    if (menu.style.maxHeight == '0px') {
        menu.style.maxHeight = '200px'
    }

    else {
        menu.style.maxHeight = '0px';
    }
}
