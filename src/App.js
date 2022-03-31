import React from 'react'
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import Counter from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">

      <NavBar />
      <header className="App-header">
        <ItemListContainer greeting={'Hola Decotouch'}></ItemListContainer>
        <Counter />
      </header>


    </div >
  );
}

export default App;
