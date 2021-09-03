function onCheckClicked(checkbox) {
    if (checkbox.checked) {
        var navItems = document.getElementsByClassName('navigation__link');

        for (var i = 0; i < navItems.length; i++) {
            navItems[i].onclick = () => {
                checkbox.checked = !checkbox.checked;
                console.log('clicked');
            }
        }        
    }
}
