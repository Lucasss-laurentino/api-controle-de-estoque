const Usuario = require('../../Models/Usuario');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const bcrypt = require('bcrypt');

class LoginController {

    

    async criar_usuario(req, res) {

        const { nome, email, nomeDaEmpresa, senha } = req.body

        const usuarioExistent = await Usuario.findOne({email});

        if(usuarioExistent){
            return res.status(422).json({erro: 'usuario existente'});
        }

        try {

            const novoUsuario = new Usuario({
                nome,
                email,
                nomeDaEmpresa,
                senha: bcrypt.hashSync(senha, 14) 
            });
    
            novoUsuario.save();    

            const secret = process.env.SECRET;

            const token = jwt.sign({id: novoUsuario._id, nome: nome, nomeDaEmpresa: nomeDaEmpresa}, secret);

            return res.json({token});

        } catch {

            return res.status(422).json({
                erro: 'erro ao criar usuario'
            });

        }


    }

    async login(req, res) {

        const { email, senha } = req.body;

        const usuarioExistente = await Usuario.findOne({email});

        if(usuarioExistente){

            const login = bcrypt.compareSync(senha, usuarioExistente.senha);

            if(login){

                const token = jwt.sign({_id: usuarioExistente._id ,nome: usuarioExistente.nome, nomeDaEmpresa: usuarioExistente.nomeDaEmpresa}, process.env.SECRET);

                return res.status(200).json({token});

            } else {

                return res.status(422).json({erro: 'Login incorreto'})

            }

        } else {

            return res.status(422).json({erro: 'login incorreto'});

        }

    }

}

module.exports = new LoginController();