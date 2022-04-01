import { useState } from 'react'
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import Counter from './components/ItemCount/ItemCount';
import './components/ItemCount/ItemCount.css';

const App = () => {
  const [show, setShow] = useState(true)

  const handleOnAdd = (quantity) => {
    console.log(`se agregaron ${quantity} productos`)
  }


  return (
    <div className="App">

      <NavBar />
      <header className="App-header">
        <ItemListContainer greeting={'Hola Decotouch'}></ItemListContainer>
        <button onClick={() => setShow(!show)} className="buttonCerrar">{show ? 'x' : '▼'}</button>
        {show ? <Counter initial={0} stock={20} onAdd={handleOnAdd} /> : null}
      </header>


    </div >
  );
}

export default App;
