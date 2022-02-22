var numericoSortudo =[]

function sorteamentoNumerico(){
    numericoSortudo = []
    do{
    let sortitude = Math.ceil( Math.random() * 60) 
    if(!numericoSortudo.includes(sorteamentoNumerico))
        numericoSortudo.push(sortitude)
    }while(numericoSortudo.length < 6)

    console.log(numericoSortudo)
}