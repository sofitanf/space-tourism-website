function toggle(option) {
    var navbar = document.getElementById('nav')

    option === 'open' ?
        (navbar.style.width = '65%')((navbar.style.padding = '34px 32px')) :
        (navbar.style.width = '0')((navbar.style.padding = '34px 0'))
        // (navbar.style.display = 'block') :
        // (navbar.style.display = 'none')
        //     (navbar.style.display = 'block') :
        //     navbar.classList.add('slideup')
        // (navbar.style.display = 'none')
}