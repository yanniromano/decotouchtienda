import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';

function App() {
  return (
    <div className="App">

      <NavBar />
      <header className="App-header">
        <ItemListContainer greeting={'Hola Decotouch'}></ItemListContainer>
      </header>
    </div >
  );
}

export default App;
