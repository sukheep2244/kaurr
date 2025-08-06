let switchbutton = document.getElementById('switchbutton')
let isDarkMode = false

switchbutton.addEventListener('click', () => {
    isDarkMode = !isDarkMode

    if (isDarkMode) {
        document.body.style.backgroundColor = 'black'
        switchbutton.innerHTML = 'Switch To Light Mode'
    }else{
         document.body.style.backgroundColor = 'white'
        switchbutton.innerHTML = 'Switch To Dark Mode'
    }
})