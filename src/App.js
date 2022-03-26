
import Home from './components/Home';
import Sobre from './components/Cadastrar';
import Alunos from './components/Alunos';

import { BrowserRouter, Routes, Link, Route } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1>Aplicação React - Alunos</h1>
      <BrowserRouter>

      <Nav variant="tabs">
        <Nav.Link as={Link} to="/">Página inicial</Nav.Link>
        <Nav.Link as={Link} to="/alunos">Listar alunos</Nav.Link>
        <Nav.Link as={Link} to="/sobre">Cadastrar</Nav.Link>
      </Nav>

      

      <Routes>
        <Route path="/" index element={<Home/>}></Route>
        <Route path="/alunos" element={<Alunos/>}></Route>
        <Route path="/sobre" index element={<Sobre/>}></Route>
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
