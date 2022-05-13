import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import Postagem from '../../../models/Postagem';
import {Box, Card, CardActions, CardContent, Button, Typography} from '@material-ui/core';
import './ListaPostagem.css';
import { useHistory } from 'react-router-dom';
import { busca } from '../../../service/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import {toast} from 'react-toastify';

function ListaPostagem() {

   const [posts, setposts] = useState<Postagem[]>([])
   let history = useHistory();let token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token = "") {
            toast.error('Voccê precisa estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined
             });
            history.push("/login")
        }
    }, [token])

   async function getPost() {
       await busca("/Postagens", setposts, {
           'Authorization': token
       })
   }

   useEffect(() => {
       getPost()
   }, [posts, length])


    return (
        <>
         <Box m={2}>
             <Card variant="outlined">
                 <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                      Postagens
                  </Typography>
                  <Typography variant='h5' component="h2">
                      Título
                  </Typography>
                  <Typography variant='body2' component="p">
                      Texto da Postagem
                  </Typography>]
                  <Typography variant='body2' component="p">
                      Tema
                  </Typography>
                </CardContent>
                <CardActions>
                    <Box display="flex" justifyContent="center"  mb={1.5} >
                        
                       <Link to="" className="text-descorator-none">
                           <Box>
                               <Button variant="contained" className='marginLeft' size='small' color='primary'>
                                   atualizar
                               </Button>
                           </Box>
                           </Link> 
                           <Link to="" className='textt-decorator-none'>
                               <Box>
                                   <Button variant="contained" size='small' color="secondary">
                                       deletar
                                   </Button>
                               </Box>

                           </Link>
                    </Box>
                </CardActions>
             </Card>
         </Box>
        </>
    );
}


export default ListaPostagem;