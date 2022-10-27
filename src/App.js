import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Contador from './components/Contador';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting= "Bienvenidos a mi sitio de Ecommerce !"/>
      <Contador stock= {5}/>
    </div>
  );
}

export default App;
