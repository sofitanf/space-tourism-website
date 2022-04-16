function toggle(option) {
    const navbar = document.getElementById('nav')
    if (option == 'open') {
        navbar.style.display = 'block'
    } else {
        navbar.style.display = 'none'
    }
    // option === 'open' ?
    //     (navbar.style.width = '65%')((navbar.style.padding = '34px 32px'))(
    //         (navbar.style.display = 'block')
    //     ) :
    //     (navbar.style.width = '0')((navbar.style.padding = '34px 0'))
}

toggle('close')