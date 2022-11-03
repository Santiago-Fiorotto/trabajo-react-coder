import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
//import {BrowserRouter} from "react-router-dom";



function App() {
  return (
    //<BrowserRouter>
    <div className="App">
      <NavBar/>
      <ItemListContainer/>
      <ItemDetailContainer/>
    </div>
   // </BrowserRouter>
  );
}

export default App;
