const btnsNumbers = document.querySelectorAll('.btns')
const btnsOperators = document.querySelectorAll('.operators')
const screen = document.querySelector('.screen')

let num, num2, operacao

function btnListen() {

    btnsNumbers.forEach(btn => {
        btn.addEventListener('click', () => {
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
                    screen.value += "+"
                    operacao = "+"
                    num = tirarSinalOperacao(screen.value)
                    break
                case "=":
                    formatarNumeros(screen.value)
                    checarOperacao(operacao)
                    break
                default:
                    screen.value += btn.value
                    break;
            }
        })
    })

}

function checarOperacao(operacao) {
    if (operacao == "+") {
        somar(num, num2)
    }
}

function tirarSinalOperacao(screenValue) {
    return screenValue.substring(0, screenValue.length - 1)
}

function formatarNumeros(numNaoFormatado) {
    num2 = numNaoFormatado.substring(num.length + 1)
}

function somar(num, num2) {
    const sum = Number(num)
    const sum2 = Number(num2)

    screen.value = sum + sum2
}

function apagarTudo() {
    screen.value = ''
}

function apagarUmCaractere() {
    const textoNovo = screen.value.substring(1)
    screen.value = textoNovo
}

btnListen()