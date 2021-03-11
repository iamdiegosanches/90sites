myFunction = () => {
    let str = document.querySelector('#str').value.replace(/\s/g, '');
    var num = str.length;

    if(num === 1){
        document.querySelector("#demo").innerHTML = `<p>Foi digitado 1 caratere!</p>`;
    } else {
        document.querySelector("#demo").innerHTML = `<p>Foram digitados ${num} caracteres</p>`;
    }
}
