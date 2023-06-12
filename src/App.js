import './App.css';
import NavBar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import "bulma/css/bulma.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos al mundo de la Agroindustria y la Ganaderia'}/>
    </div>
  );
}

export default App;
