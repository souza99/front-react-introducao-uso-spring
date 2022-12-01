import axios from "axios";

export class PermissaoService {
    url = 'http://localhost:8080/api/permissao';

    listarTodos() {
        return axios.get(this.url);
    }

    salvar(objeto) {
        return axios.post(this.url + '/salvar', objeto);
    }

    editar(objeto) {
        return axios.put(this.url + '/editar/' + objeto.id, objeto);
    }

    excluir(id) {
        return axios.delete(this.url + '/excluir/' + id);
    }
}