import axios from "axios";

export class SolicitarCodigoService {
    url = 'http://localhost:8080/api/gerenciamento-usuario';

    telaSolicitarCodigo() {
        window.location.href = "/solicitar-codigo";
    }

    telaResetarSenha() {
        window.location.href = "/editar-senha";
    }

    solicitarCodigo(objeto, mostrarMensagemAviso, mensagemErro, mostrarMensagemSucesso) {
        mostrarMensagemAviso();
        return axios.post(this.url + '/senha-codigo', objeto).then(res => {
            mostrarMensagemSucesso();
        }).catch(error => {
            mensagemErro();
        });
    }
}