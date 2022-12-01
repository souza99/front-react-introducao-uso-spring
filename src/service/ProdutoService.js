import axios from "axios";
import {LoginService} from "./LoginService";

export class ProdutoService {
    url = 'http://localhost:8080/api/produto';

    constructor() {
        this.inicializarAxios();
        this.tratamentoErro401();
    }

    inicializarAxios() {
        this.axiosInstance = axios.create({
            baseURL: this.url,
        });

        this.axiosInstance.interceptors.request.use((config) => {
                const token = new LoginService().getToken();
                const authRequestToken = token ? `Bearer ${token}` : '';
                config.headers.common['Authorization'] = authRequestToken;
                return config;
            },
            (error) => Promise.reject(error)
        );
    }

    tratamentoErro401() {
        this.axiosInstance.interceptors.response.use((response) => {
            return response;
        }, (erro) => {
            console.log(erro.response.status);
            if (erro.response.status === 401) {
                if (!erro.request.response.includes("gerenciamento-usuario/login")) {
                    new LoginService().sair();
                    window.location.href = "/";
                }
            }
            return Promise.reject(erro);
        });
    }

    listarTodos() {
        return this.axiosInstance.get(this.url);
    }

    buscarPorId(produtoId) {
        return this.axiosInstance.get(this.url + '/' + produtoId);
    }

    salvar(objeto) {
        return this.axiosInstance.post(this.url + '/salvar', objeto);
    }

    editar(objeto) {
        return this.axiosInstance.put(this.url + '/editar/' + objeto.id, objeto);
    }

    excluir(id) {
        return this.axiosInstance.delete(this.url + '/excluir/' + id);
    }
}