function contar(){
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0){
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando passo = 1')
            p = 1
        }
        if(i < f){
            // Contagem crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c}→ `
            }
        } else{
            // Contagem decrescente
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c}→ `
            }
        }
        res.innerHTML += 'FIM'
    }
}
