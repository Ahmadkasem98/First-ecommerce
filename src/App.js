import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Producte from './pages/Producte';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import { createContext, useState } from 'react';

export const Val = createContext()
function App() {

  const [user , setUser] = useState(true) ;

  
  return (
    <BrowserRouter>
     <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/Register' element={<Register setUser={setUser} />} />
        <Route path='/Cart' element={ user ? <Cart /> : <Register setUser={setUser} />} />
        <Route path='/Login' element={<Login setUser={setUser} />} />
        <Route path='/Producte' element={user ? <Producte /> : <Register setUser={setUser} /> } />
        <Route path='/ProductList' element={user ? <ProductList /> : <Register setUser={setUser} /> } />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
