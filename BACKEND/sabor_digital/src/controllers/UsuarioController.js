const UsuarioService = require('../services/UsuarioService');

class UsuarioController {
    async registrar(req, res) {
        try {
            const resultado = await UsuarioService.registrarUsuario(req.body);
            res.status(201).json(resultado);
        } catch (erro) {
            res.status(erro.status || 500).json({
                sucesso: false,
                mensagem: erro.mensagem || "Erro interno do servidor",
                erro: erro.stack || erro
            });
        }
    }

    async login(req, res) {
        try {
            const { email, senha } = req.body;
            const resultado = await UsuarioService.login(email, senha);
            res.status(200).json(resultado);
        } catch (erro) {
            res.status(erro.status || 500).json({
                sucesso: false,
                mensagem: erro.mensagem || "Erro interno do servidor",
                erro: erro.stack || erro
            });
        }
    }
}

<<<<<<< HEAD
module.exports = new UsuarioController();
=======
module.exports = new UsuarioController();
>>>>>>> 23c4337758cdc70c6c29ea89f6c584458c42688c
