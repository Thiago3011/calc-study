const btnsNumbers = document.querySelectorAll('.btns')
const btnsOperators = document.querySelectorAll('.operators')
const screen = document.querySelector('.screen')



function btnListen() {

    btnsNumbers.forEach(btn => {
        btn.addEventListener('click', () => {
            screen.value += btn.textContent
        })
    })

    btnsOperators.forEach(btn => {
        btn.addEventListener('click', () => {
            screen.value += btn.textContent

            if (btn.textContent == 'C') {
                screen.value = ''
            }
        })
    })
    
}
