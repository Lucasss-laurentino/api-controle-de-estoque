const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema({
    nome: String,
    email: String,
    nomeDaEmpresa: String,
    senha: String,
    admin: Boolean
});

const Usuario = mongoose.model('Usuario', UsuarioSchema);

module.exports = Usuario;