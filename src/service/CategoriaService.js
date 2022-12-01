import axios from 'axios';

export class CategoriaService {
    url = 'http://localhost:8080/api/categoria';

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