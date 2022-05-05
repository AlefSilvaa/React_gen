import React from 'react';
import { BrowserRouter as Router , Route, Routes} from 'react-router-dom';
import Navbar from './componentes/estaticos/navbar/Navbar';
import Footer from './componentes/estaticos/footer/Footer';
import CadastroUsuario from './paginas/home/cadastroUsuario/CadastroUsuario';
import Login from './paginas/home/login/Login';
import Home from './paginas/home/Home';


import './App.css';

function App() {
  return (

 <Router>
   <Navbar />
   <div style={{ minHeight: '100vh' }}>
    <Routes>
          <Route path='/' element={<Login />} />
          <Route path="/login" element={<Login />} />
        <Route path='/home' element={<Home />} /> 
        <Route path='/cadastrousuario' element={<CadastroUsuario />} />
    </Routes>
    </div>
  <Footer />
  </Router>

  );
  
}

export default App;