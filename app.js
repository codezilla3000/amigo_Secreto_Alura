//Definindo as variáveis globais que serão utilizadas pelas funções 
let amigoSecreto = document.getElementById('amigo')
let lista = []

// definindso função chamada pelo botão "adicionar", ela acessa o valor do campo de id "amigo" no html, faz a checagm de se o campo está vazio, se não estiver, adiciona um campo, modifica o html do campo listaAmigos, a lista global e reseta o campo de input pra vazio.
function adicionarAmigo () {
    // let testando = document.querySelector('input').value
    let amigoOculto = amigoSecreto.value;
    if (amigoOculto== "") {
        alert("Por favor insira um nome válido");
    } else {
        let listaAmigos = document.getElementById('listaAmigos');
        lista.push(amigoOculto);
        // console.log(lista.length);
        // console.log(lista);
        listaAmigos.innerHTML += "<li>" + amigoOculto + "</li>";
        amigoSecreto.value = "";
    }
    
};
// Definindo função que será chamada pelo botão "Sortear amigo", ela busca o elemento resultado, checa a length da lista global criada com os valores armazenados, gera um numero aleatório levando em consideração o número máximo de entradas na lista e modifica na tela o HTML do elemento "resultado". Depois disso, zera todos os campos. 
function sortearAmigo() {
    let resultado = document.getElementById('resultado');
    let maximo = lista.length;
    let sorteio = parseInt(Math.random()* maximo + 1); 
    resultado.innerHTML = "O amigo secreto sorteado é: " + lista[sorteio];
    
    amigoSecreto.value = ""
    listaAmigos.innerHTML = "";
    lista =[];
    
};

