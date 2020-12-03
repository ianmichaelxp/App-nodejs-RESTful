const Models = require('../../models/comentarioModel');

let controller = {}

controller.getComentarios = function(req,res){
    res.json(Models.getAllComentarios());
};

controller.postComentario = function(req, res){
    const comentario = req.body;

    Models.addNewComentario(comentario, res);
    res.status(200).json(comentario);
}

controller.deleteComentario = function(req, res) {
    const id = parseInt(req.params.id);
    Models.removeComentario(id);
    res.status(200).json(`O comentário com id: ${id} foi excluído`)
}

module.exports = controller;