interface UserLogin {
    id: number
    nome:  string
    usuario: string
    foto: string
    // (?) Permite omitir o conteúdo do campo, o token não precisa ser inicializado quando o objeto for criado
    // Apresenta dupla tipagem, o token pode ser inicializado com um vaor string ou utilizando a palavra null
    token?: string | null
}
export default UserLogin