import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import WishInput from './WishInput';
import WishList from './WishList';

// Valores iniciales que damos por defecto al array de deseos
const initialWishes = [
  { id: 0, text: 'Aprobar DWEC', done: false },
  { id: 1, text: 'Ir al cine', done: true },
  { id: 2, text: 'Comer un bocadillo', done: false },
];

// Función que hace que se muestre todo en el index.html
function App() {
  // Aquí le pasamos los deseos, y coje los initialWishes como estado para mostrarlos
  // wishes es un array, y se puede acceder a el por setWishes, y lo que contiene es initialwishes
  // Esta línea se llama hook useState para guardar estado componente
  const [wishes, setWishes] = useState(initialWishes);
  return (
    // Aquí se muestran todas las cosas que tenemos creadas
    <div className="app">
      <Header label="My WishList" />
      <WishInput onNewWish={(newWish) => setWishes([newWish, ...wishes])} />
      <WishList wishes={wishes} />

      <button className="wish-clear" type="button">Archive wishes</button>
    </div>
  );
}
// eslint-disable-next-line max-len
// La función que estamos invocando en el wishInput, modifica la lista de deseos con el nuevo deseo (newWish), y el resto de deseos (...wishes)
export default App;
