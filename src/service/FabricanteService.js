import axios from 'axios';

export class FabricanteService {
    url = 'http://localhost:8080/api/fabricante';

    listarTodos() {
        return axios.get(this.url);
    }

    salvar(objeto) {
        return axios.post(this.url + '/salvar', objeto);
    }

    editar(objeto) {
        return axios.put(this.url + '/editar/' + objeto.id, objeto);
    }

    deletar(id) {
        return axios.delete(this.url + '/deletar/' + id);
    }
}