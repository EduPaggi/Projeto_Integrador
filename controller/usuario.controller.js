//const funcionariosRepository = require("../repository/funcionarios.repository.js");
const usuarioRepository = require("../repository/usuario.repository");

module.exports = {
    buscaTodos: (req, res) => {
        const data = usuarioRepository
            .buscaTodos()
            .then((result) => {
                res.send({ msg: result })
            })
            .catch((error) => {
                res.status(500).send(error);
            });
        // res.render("usuarios", { data });
    },
    buscaPorId: (req, res) => {
        //Lembra do async await e do let data
        const { id_usuario } = req.params;
        const data = usuarioRepository.buscaPorId(id_usuario)
            .then((result) => {
                res.send({ msg: result })

            })
            // data = data[0]
            // data.DATA_NSC = formataData(data.DATA_NSC);
            // res.render("cadastro_funcionario", { data })
    },
    InserirEnd: (req, res) => {
        const endereco = req.body
        usuarioRepository.InserirEnd(endereco)
            .then((data) => {
                res.send({ msg: "Endereço inserido com sucesso!" });
            })
    },
    Inserir: (req, res) => {
        var usuario = req.body;

        console.log(usuario);
        usuarioRepository.Inserir(usuario);
        res.send({ msg: "Usuário inserido com sucesso!", usuario });
    },
}