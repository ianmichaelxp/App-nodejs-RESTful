let controller = require('../controllers/comentarioController');

module.exports  = function(app) {
    
    app.route('/comentarios')
        .get(controller.getComentarios);  
        
    app.route('/comentarios')
        .post(controller.postComentario);

    app.route('/comentarios/:id')
        .delete(controller.deleteComentario);            
};