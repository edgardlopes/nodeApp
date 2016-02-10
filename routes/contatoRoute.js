module.exports = function(app){
    var autenticar = require('./../middleware/autenticador');
    
    var contatoController = app.controllers.contatoController;
    app.get('/contatos', autenticar, contatoController.index);
    app.get('/contato/:id', autenticar, contatoController.show);
    app.post('/contato', autenticar, contatoController.create);
    app.get('/contato/:id/editar', autenticar, contatoController.edit);
    app.put('/contato/:id', autenticar, contatoController.update);
    app.delete('/contato/:id', autenticar, contatoController.delete);
};