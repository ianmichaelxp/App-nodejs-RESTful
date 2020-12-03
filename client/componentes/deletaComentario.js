const BotaoDeleta = () => { 
    const botaoDeleta = document.createElement('button')

    botaoDeleta.innerText = 'deletar'
    botaoDeleta.addEventListener('click', deletarComentario)

    return botaoDeleta
}

const deletarComentario = (evento) => { 
    const botaoDeleta = evento.target

    const comentarioConcluido = botaoDeleta.parentElement;
    let id = comentarioConcluido.getAttribute("id");

    var xhr = new XMLHttpRequest();
    xhr.open("DELETE", `http://localhost:3000/comentarios/${id}`, true);
    xhr.onload = function () {
        var res = JSON.parse(xhr.responseText);
        console.log(res);
    }
    xhr.send(null);

    comentarioConcluido.remove()
    
    return botaoDeleta

}

export default BotaoDeleta