import { useState } from 'react'
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import Counter from './components/ItemCount/ItemCount';
import './components/ItemCount/ItemCount.css';
import './components/Item/Item.css';


const App = () => {
  const [show, setShow] = useState(true)

  const handleOnAdd = (quantity) => {
    console.log(`se agregaron ${quantity} productos`)
  }


  return (
    <div>
      <div className="App">

        <NavBar />
        <header className="App-header"><ItemListContainer greeting={'Novedades'}></ItemListContainer>

          {/* <button onClick={() => setShow(!show)} className="buttonCerrar">{show ? 'x' : '▼'}</button>
        {show ? <Counter initial={0} stock={20} onAdd={handleOnAdd} /> : null} */}
        </header>


      </div >

    </div>
  );
}

export default App;
