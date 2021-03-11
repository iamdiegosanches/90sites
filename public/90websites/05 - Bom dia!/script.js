const hoje = document.querySelector('#dia');
const img = document.querySelector('#imagem');
let dia;

switch(new Date().getDay()){
    case 0:
        dia = "Domingo";
        img.innerHTML = '<img src="imagens/domingo-bomdia.gif" alt="mensagem de bom dia">'
        break;
    case 1:
        dia = "Segunda-feira";
        img.innerHTML = '<img src="imagens/segunda-bomdia.gif" alt="mensagem de bom dia">'
        break;
    case 2:
        dia = "Terça-feira";
        img.innerHTML = '<img src="imagens/terca-bomdia.gif" alt="mensagem de bom dia">'
        break;
    case 3:
        dia = "Quarta-feira";
        img.innerHTML = '<img src="imagens/quarta-bomdia.gif" alt="mensagem de bom dia">'
        break;
    case 4:
        dia = "Quinta-feira";
        img.innerHTML = '<img src="imagens/quinta-bomdia.gif" alt="mensagem de bom dia">'
        break;
    case 5:
        dia = "Sexta-feira";
        img.innerHTML = '<img src="imagens/sexta-bomdia.gif" alt="mensagem de bom dia">'
        break;
    case  6:
        dia = "Sábado";
        img.innerHTML = '<img src="imagens/sabado-bomdia.gif" alt="mensagem de bom dia">'
}

hoje.innerHTML = `<h2>Hoje é ${dia}!!</h2>`