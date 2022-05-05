interface User {
    id: number
    nome:  string;
    senha: string;
    usuario: string;
    foto: string;
    token?: string | null;

}

export default User