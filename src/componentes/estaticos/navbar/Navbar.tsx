import react from 'react';
import {AppBar, Toolbar, Typography, Box, Grid} from '@material-ui/core';
import useLocalStorage from "react-use-localstorage";
import {Link} from 'react-router-dom';
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useHistory } from 'react-router-dom';
import { addToken } from '../../../store/tokens/actions';
import { toast } from 'react-toastify';

function Navbar (){

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let history = useHistory();
    const dispatch = useDispatch();

    function goLogout(){
        dispatch(addToken('');
  toast.info('Usuario deslogado', {
     position: "top-right",
     autoClose: 2000,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: false,
     draggable: false,
     theme: "colored",
     progress: undefined
  });
        history.push('/login')
    }

    var navbarComponent;

    if(token !== ""){
        navbarComponent = <AppBar  position="static" >
        <Toolbar variant="dense" >
        <Box className='cursor'>
            <Typography variant="h5" color="inherit">
                BlogPessoal
            </Typography>
        </Box>

         <Box  display="flex" justifyContent="start">
             <Box mx={1} className='cursor'>
                 <Typography  variant="h6" color="inherit">
                     Home
                 </Typography>

             </Box>
             <Box mx={1} className='cursor'>
                 <Typography variant="h6" color="inherit">
                     Postagens
                 </Typography>

             </Box>
             <Box mx={1} className='cursor'>
                 <Typography variant="h6" color="inherit">
                     Temas
                 </Typography>

             </Box>
             <Box mx={1} className='cursor'>
                 <Typography variant="h6" color="inherit">
                     Cadastrar Temas
                 </Typography>

             </Box>
             <Link to='/login' className='text-decoration-none'>
             <Box mx={1} className='cursor'>
                 <Typography variant="h6" color="inherit">
                     Logout
                 </Typography>
             </Box>
             </Link>
             </Box>
          </Toolbar>
         </AppBar>
    }



    return (
        <>
             {navbarComponent}
        </>
    );
}

export default Navbar;

function setToken(arg0: string) {
    throw new Error('Function not implemented.');
}
