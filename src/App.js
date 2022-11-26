import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/carrito/Cart';
import Form from './components/Form';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from './components/Footer';
import CartProvider from './context/CartContext';
import Contacto from './components/Contacto';
import Carrusel from './components/Carrusel';


function App() {
  return (
    <BrowserRouter>
   <CartProvider>
    <div className="App">
      <NavBar/>
      <Routes>
        <Route 
        path='/'
        element={ 
          <>
          <Carrusel/>
          <ItemListContainer/>
          </>
       }
        />
        <Route
        path='/productos/category/:categoryName'
        element= {<ItemListContainer/>}/>
        <Route 
        path='/detail/:idProd'
        element={ <ItemDetailContainer/> }
        />
          <Route
          path='/cart'
          element={<Cart/>}/>
                <Route
          path='/contacto'
          element={<Contacto/>}/>
          <Route
          path='/checkout'
          element={<Form/>}/>
      </Routes>
      <Footer/>
    </div>
   </CartProvider>
    
    
    </BrowserRouter>
  );
}

export default App;
