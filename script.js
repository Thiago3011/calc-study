const btnsNumbers = document.querySelectorAll('.btns')
const btnsOperators = document.querySelectorAll('.operators')
const screen = document.querySelector('.screen')
const miniScreen = document.querySelector('.mini-screen')

let num1, num2, operacao
let limparScreenAposCalculo = true

function btnListen() {

    btnsNumbers.forEach(btn => {
        btn.addEventListener('click', () => {
            if (limparScreenAposCalculo) {
                screen.value = ''
            }

            limparScreenAposCalculo = false
            screen.value += btn.textContent
        })
    })

    btnsOperators.forEach(btn => {
        btn.addEventListener('click', () => {
            switch (btn.value) {
                case "C":
                    apagarTudo()
                    break;
                case "AC":
                    apagarUmCaractere()
                    break
                case "+":
                    num1 = Number(screen.value)
                    operacao = '+'

                    miniScreen.value = num1 + ' +'
                    screen.value = ''
                    break
                case "-":
                    num1 = Number(screen.value)
                    operacao = '-'
                    miniScreen.value = num1 + ' -'
                    screen.value = ''
                    break
                case "/":
                    num1 = Number(screen.value)
                    operacao = '/'
                    miniScreen.value = num1 + ' /'
                    screen.value = ''
                    break
                case "X":
                    num1 = Number(screen.value)
                    operacao = 'X'
                    miniScreen.value = num1 + ' X'
                    screen.value = ''
                    break
                case "%":
                    if (num1 == null) break
                    num2 = Number(screen.value)
                    operacao = '%'
                    calcular()
                    break
                    case "T":
                        if (screen.value == '') break
                        const numComSinalInvertido = Number(screen.value) * -1
                        screen.value = numComSinalInvertido
                        break
                case "=":
                    num2 = Number(screen.value)
                    miniScreen.value = ''
                    calcular()
                    break
                default:
                    screen.value += btn.value
                    break;
            }
        })
    })

}

function calcular() {
    if (operacao == '+') {
        const resultado = num1 + num2
        limparScreenAposCalculo = true

        return screen.value = resultado

    } else if (operacao == '-') {
        const resultado = num1 - num2
        limparScreenAposCalculo = true

        return screen.value = resultado

    } else if (operacao == '/') {
        if (num2 === 0) {
            alert('Impossível dividir por 0')
            screen.value = ''
            miniScreen.value = ''
        } else {
            const resultado = num1 / num2
            limparScreenAposCalculo = true

            return screen.value = resultado
        }

    } else if (operacao == 'X') {
        const resultado = num1 * num2
        limparScreenAposCalculo = true

        return screen.value = resultado
    } else if (operacao == '%') {
        const resultado = num2 / num1
        limparScreenAposCalculo = true

        return screen.value = resultado
    }
}

function apagarTudo() {
    screen.value = ''
    miniScreen.value = ''
}

function apagarUmCaractere() {
    const textoNovo = screen.value.substring(1)

    return screen.value = textoNovo
}

btnListen()