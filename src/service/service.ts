// Responsável pela implementação das regras de negócio
// Responsável pela conexão do backend com frontend

import axios from "axios";

// Realizando conexão com API através da url do deploy
export const api = axios.create({
    baseURL: 'https://blogenpessoal.herokuapp.com/'
})

// Function responsável pelo cadastro do usuário
export const cadastroUsuario = async (url: any, dados: any, setDados: any) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}

// Function responsável pelo login
// Função async: são funções que permitem que espere que um recurso seja finalizado e retornado para que de continuidade
// ao fluxo da aplicação
// await: espera a requsição do backend finalizar, quando finalizada vai pegar a resposta e esta será gravada na variável resposta
export const login = async (url: any, dados: any, setDados: any) => {
    // Reponsável por fazer uma requisição ao backend   
    const resposta = await api.post(url, dados) // Essa variável é um objeto
    setDados(resposta.data.token)
}