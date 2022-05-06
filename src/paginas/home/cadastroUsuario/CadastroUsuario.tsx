import React,{ ChangeEvent, useEffect, useState} from 'react';
import { Grid, Box, Typography, Button, TextField } from '@material-ui/core';
import {Link, useNavigate} from 'react-router-dom';
import User from '../../../models/User';
import './CadastroUsuario.css';
import { cadastroUsuario } from '../../../service/service';

function CadastroUsuario(){

  let navigate = useNavigate();
  const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const [user, setUser] =useState<User>({
       
       id: 0,
       nome: '',
       usuario: '',
       senha: '',
       foto: ''

    })
    // Armazenar os valores do retorno da API
    const [userResult, setUserResult] = useState<User>({

        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: ''    
    
    })

    //Verificar se o ID é diferente de 0, se for o usuario será enviado para a tela de login
    useEffect(() => {
        if (userResult.id !== 0) {
            navigate("/login")
            //console.log(userResult)
        }
    }, [userResult])

    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (confirmarSenha === user.senha) {
            cadastroUsuario(`/usuarios/cadastar`, user, setUserResult)
            alert('Usuario cadastrado com sucesso')
        }else {
            alert('Dados inconsistentes. Favor verificar as informações de cdastro.')
        }
    }
  
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} className='imagem2'></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                <form onSubmit={onSubmit}>
                    <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Cadastrar</Typography>
                    <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='Nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth />
                    <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth />
                    <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                    <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='confirmarSenha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />
                    <Box marginTop={2} textAlign='center'>
                        <Link to='/login'className='text-decorator-none'>
                            <Button  variant='contained' color='secondary' className='btnCancelar'>
                                Cancelar
                            </Button>
                        </Link>
                        <Button  type='submit' variant='contained' color='primary'>
                                Cadastrar
                            </Button>
                    </Box>
                </form>
                </Box>

            </Grid>
  


        </Grid>
    );
}

export default CadastroUsuario;