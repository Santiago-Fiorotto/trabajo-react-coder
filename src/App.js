import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/carrito/Cart';
import {BrowserRouter, Routes, Route} from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar/>
      <Routes>
        <Route 
        path='/'
        element={ <ItemListContainer/> }
        />
        <Route
        path='/productos/category/:categoryName'
        element= {<ItemListContainer/>}/>
        <Route 
        path='/detail'
        element={ <ItemDetailContainer/> }
        />
          <Route
          path='/cart'
          element={<Cart/>}/>
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
