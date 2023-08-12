document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header')
    const buttonDarkMode = document.getElementById('darkmode')
    const title = document.getElementById('title')
    const section = document.getElementById('section')
    const input = document.getElementById('input')
    const icon = document.getElementById('icon')
    const select = document.getElementById('select')
    const bandeira = document.getElementsByClassName('bandeira')
    
    for (let i = 0; i < bandeira.length; i++) {
        bandeira[i].classList.add("bandeira_light")
    }
    
    var darkMode = false;

    buttonDarkMode.addEventListener('click', () => {
        console.log(darkMode)
        if (darkMode) {
            
            header.classList.remove('header_dark')
            header.classList.add('header_light')

            title.classList.remove('header_title_dark')
            title.classList.add('header_title_light')

            buttonDarkMode.classList.remove('button_dark')
            buttonDarkMode.classList.add('button_light')

            section.classList.remove('section_dark')
            section.classList.add('section_light')

            input.classList.remove('search_input_dark')
            input.classList.add('search_input_light')

            icon.classList.remove('icon_lupa_dark')
            icon.classList.add('icon_lupa_ligth')

            select.classList.remove('select_dark')
            select.classList.add('select_light')

            for (let i = 0; i < bandeira.length; i++) {
                bandeira[i].classList.remove('bandeira_dark')
                bandeira[i].classList.add("bandeira_light")
            }
            
            darkMode = false

        } else {
            
            header.classList.remove('header_light')
            header.classList.add('header_dark')

            title.classList.remove('header_title_light')
            title.classList.add('header_title_dark')

            buttonDarkMode.classList.remove('button_light')
            buttonDarkMode.classList.add('button_dark')

            section.classList.remove('section_light')
            section.classList.add('section_dark')

            input.classList.remove('search_input_light')
            input.classList.add('search_input_dark')

            icon.classList.remove('icon_lupa_light')
            icon.classList.add('icon_lupa_dark')

            select.classList.remove('select_light')
            select.classList.add('select_dark')

            for (let i = 0; i < bandeira.length; i++) {
                bandeira[i].classList.remove('bandeira_light')
                bandeira[i].classList.add("bandeira_dark")
            }
            
            darkMode = true
        }
    })
})