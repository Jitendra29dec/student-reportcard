(function initTheme() {
    const isFluid = JSON.parse(localStorage.getItem('isFluid'));
    if (isFluid) {
        document.getElementsByClassName('container')[0].classList.remove('container')
    }

    const navbarStyle = localStorage.getItem('navbarStyle');
    if (navbarStyle) {
        document.getElementsByClassName('navbar-vertical')[0].classList.remove('navbar-undefined');
        document.getElementsByClassName('navbar-vertical')[0].classList.add('navbar-'+navbarStyle)
    }
})()