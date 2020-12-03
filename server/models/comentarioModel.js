let api = {};

let comentarios = [
    { id : 0, autor : "Ian Michael", comentario : "Salvo no Banco"}
  ];

api.getAllComentarios = function(){
    return comentarios;
};

api.addNewComentario = function(comentario, res){ 
    comentarios.push(comentario);  
}

api.removeComentario = function(id){
  comentarios.forEach((element,index,array) => {
    if(element.id === id){
        array.splice(index,1);
    }})
}
module.exports = api;