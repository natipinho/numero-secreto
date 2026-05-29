let secretNumber = generateNumber ();

//forma mais otimizada de selecionar e modificar vários elementos html
function writeText (tag, text){
    let field = document.querySelector (tag);
    field.innerHTML = text;
}
writeText ('h1', 'Jogo do Número Secreto!');
writeText ('p', 'Escolha um número entre 1 e 10:')


function generateNumber (){
   return parseInt(Math.random()* 10 + 1);
}

function verificarChute(){
    let chosenNumber = document.querySelector('input').value; 
    if (chosenNumber == secretNumber){
        alert ('Parabéns! Você acertou o número secreto!');
    } else {
        alert ('Ops! Tente novamente, por favor!');
    }
}