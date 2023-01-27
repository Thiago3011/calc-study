const btnsNumbers = document.querySelectorAll('.btns')
const btnsOperators = document.querySelectorAll('.operators')
const screen = document.querySelector('.screen')
const miniScreen = document.querySelector('.mini-screen')

let num1, num2, operacao, valorSemPonto
let limparScreenAposCalculo = true

function btnListen() {

    btnsNumbers.forEach(btn => {
        btn.addEventListener('click', () => {

            if (limparScreenAposCalculo) screen.value = ''

            screen.value += btn.textContent
            

                formatarNumeros(screen.value)
                limparScreenAposCalculo = false
        

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
                    miniScreen.value = screen.value + ' +'
                    valorSemPonto = tirarPonto(screen.value)
                    num1 = Number(valorSemPonto)
                    operacao = '+'

                    screen.value = ''
                    break
                case "-":
                    miniScreen.value = screen.value + ' -'
                    valorSemPonto = tirarPonto(screen.value)
                    num1 = Number(valorSemPonto)
                    operacao = '-'
                    screen.value = ''
                    break
                case "/":
                    miniScreen.value = screen.value + ' /'
                    valorSemPonto = tirarPonto(screen.value)
                    num1 = Number(valorSemPonto)
                    operacao = '/'
                    screen.value = ''
                    break
                case "X":
                    miniScreen.value = screen.value + ' X'
                    valorSemPonto = tirarPonto(screen.value)
                    num1 = Number(valorSemPonto)
                    operacao = 'X'
                    screen.value = ''
                    break
                case "%":
                    valorSemPonto = tirarPonto(screen.value)
                    if (screen.value == '') break
                    num2 = Number(valorSemPonto)
                    operacao = '%'
                    miniScreen.value = ''
                    calcular()
                    break

                case "+/-":
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
        const resultado = formatarNumeros(String(num1 + num2))
        limparScreenAposCalculo = true

        return screen.value = resultado

    } else if (operacao == '-') {
        const resultado = formatarNumeros(String(num1 - num2))
        limparScreenAposCalculo = true

        return screen.value = resultado

    } else if (operacao == '/') {
        if (num2 === 0) {
            alert('Impossível dividir por 0')
            screen.value = ''
            miniScreen.value = ''
        } else {
            const resultado = formatarNumeros(String(num1 / num2))
            limparScreenAposCalculo = true

            return screen.value = resultado
        }

    } else if (operacao == 'X') {
        const resultado = formatarNumeros(String(num1 * num2))
        limparScreenAposCalculo = true

        return screen.value = resultado

    } else if (operacao == '%') {
        const resultado = formatarNumeros(String(num1 / num2))
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

function formatarNumeros(valorTela) {

    let valorSemPonto = tirarPonto(valorTela)

    let valorFormatado = Number(valorSemPonto).toLocaleString('pt-BR')

    return screen.value = valorFormatado
}

function tirarPonto(valor) {
    if (valor.includes('.')) {
        return valor.replace(/\./g, '')
    } else {
        return valor
    }
}

btnListen()