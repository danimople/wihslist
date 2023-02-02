import React, { useState } from 'react';

import PropTypes from 'prop-types';

function WishInput({ onNewWish }) {
  // hook del estado, nuevo deseo, el input antes de escribir aparece vacío
  // Lo anterior se indica en el useState
  const [newWish, setNewWish] = useState(' ');
  return (
    <fieldset className="wish-input">
      <legend className="wish-input__label">New wish</legend>
      <input
        className="wish-input__field"
        type="text"
        placeholder="Write a new wish"
        value={newWish}
        onChange={(e) => setNewWish(e.target.value)}
        onKeyUp={(e) => {
          // si he pulsado intro y el nuevo deseo no es vacío
          if (e.key === 'Enter' && newWish.length) {
            // Llamamos a la función callback pasándole el nuevo objeto deseo
            onNewWish({ text: newWish, done: false, id: new Date().getTime() });
            // Con vaciamos el value del input cuando le damos al boton
            setNewWish('');
          }
        }}
      />
    </fieldset>
  );
}
// La línea de onchange (arriba) quiere decir que cuando escribamos en el input, cambie el valor de
// este por el valor del e.target (lo que estamos escribiendo en el input)

// eslint-disable-next-line max-len
// Esto es para definir los tipos de datos de los propTypes, si aquí pusieramos is required, no habría que poner el .defaultProps
WishInput.propTypes = {
  onNewWish: PropTypes.func,
};

// Valor por defecto de la prop.
WishInput.defaultProps = {
  onNewWish: () => { },
};

export default WishInput;
