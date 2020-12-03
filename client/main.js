import BotaoDeleta from './componentes/deletaComentario.js'
var id = 0;

const getComentarios = () => {

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "http://localhost:3000/comentarios", true);

    xhr.onload = function () {
        
        var comentarios = JSON.parse(xhr.responseText);
        comentarios.forEach(function(comentario) 
        {
            adicionaComentario(comentario);
        });
    };

    xhr.send(null);

}

getComentarios();

const geraId = () => {
    id++;
    return id;
}

const adicionaComentario = (comentario) => {
    const lista = document.querySelector('[data-list]');
    const valor = comentario.comentario;

    const elementoComentario = document.createElement('li');
    elementoComentario.classList.add('comentarioStyle');
    elementoComentario.setAttribute('id', comentario.id);
    const conteudo = `<p class="content">${valor}</p>`;
    elementoComentario.innerHTML = conteudo;
    elementoComentario.appendChild(BotaoDeleta());
    lista.appendChild(elementoComentario);
}


const criarComentario = (evento) => {

    evento.preventDefault()

    var valor = {};
    const lista = document.querySelector('[data-list]')
    const inputComentario = document.querySelector('[data-form-input]')
    valor.id = geraId();
    valor.autor = "desconhecido";
    valor.comentario = inputComentario.value;

    var json = JSON.stringify(valor);

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3000/comentarios", true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onload = function () {
        var res = JSON.parse(xhr.responseText);
        console.log(res);
    }
    xhr.send(JSON.stringify(valor));

    const comentario = document.createElement('li')
    comentario.classList.add('comentarioStyle')
    comentario.setAttribute('id', valor.id);
    const conteudo = `<p class="content">${valor.comentario}</p>`

    comentario.innerHTML = conteudo

    //comentario.appendChild(BotaoConclui())
    comentario.appendChild(BotaoDeleta())
    lista.appendChild(comentario)
    inputComentario.value = " "

}

const novoComentario = document.querySelector('[data-form-button]')
novoComentario.addEventListener('click', criarComentario)