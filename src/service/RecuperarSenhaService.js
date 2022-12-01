import axios from "axios";

export class RecuperarSenhaService {
    url = 'http://localhost:8080/api/gerenciamento-usuario';

    telaLogin() {
        window.location.href = "/login";
    }

    recuperarSenha(objeto, mensagemErro, mostrarMensagemSucesso) {
        return axios.post(this.url + '/senha-editar', objeto).then(res => {
            if (res.data) {

            }
            mostrarMensagemSucesso();
        }).catch(error => {
            mensagemErro();
        });
    }
}