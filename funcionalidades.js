var numericoSortudo = []
var numericoDigitalizado = []

function sorteamentoNumerico() {
    if (numericoDigitalizado.length < 6) {
        alert("Antes de sortear, digite 6 números dos campos")
    } else {
        numericoSortudo = []
        do {
            let sortitude = Math.ceil(Math.random() * 60)
            if (!numericoSortudo.includes(sorteamentoNumerico))
                numericoSortudo.push(sortitude)
        } while (numericoSortudo.length < 6)

        document.getElementById("numerico_sortudo").innerText = numericoSortudo
        acertividade()
    }
}

function catadorDeNumeros(qualitatividade, posicionamento) {
    qualitatividade = Number(qualitatividade)
    if (qualitatividade > 60) {
        alert("Não se pode colocar, escolher, digitar ou teclar um numerico maior que 60")
        limpeza(posicionamento)
    } else if (qualitatividade <= 0) {
        alert("Não se pode colocar, escolher, digitar ou teclar um numerico menor que 0")
        limpeza(posicionamento)
    } else if (numericoDigitalizado.includes(qualitatividade)) {
        alert("Não pode repetir")
        limpeza(posicionamento)
    } else {
        numericoDigitalizado[posicionamento] = qualitatividade
    }
}

function acertividade() {
    let contabilizador = 0
    numericoDigitalizado.forEach(function (valor, index) {
        if (numericoSortudo.includes(valor)) {
            contabilizador = contabilizador + 1
        }
    })
    document.getElementById("totalidade").innerText = contabilizador
}

function limpeza(posicionamento) {
    document.getElementById(`numerino${posicionamento}`).value = ''
}