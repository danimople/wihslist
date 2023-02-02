import React from 'react';
import PropTypes from 'prop-types';
import WishItem from './WishItem';

// A esta función le pasamos los deseos
function WishList({ wishes, onWishChange }) {
  // La i es la posicion del array en el que estamos
  return (
    <ul className="wish-list">
      {wishes.map(({ text, id, done }, i) => (
        <WishItem
          key={`wish${id}`}
          text={text}
          done={done}
          id={id}
          onDoneChange={(value) => {
            // Una copia de nuestros wishes
            const tempWishes = [...wishes];
            tempWishes[i].done = value;
            onWishChange(tempWishes);
          }}
        />
      ))}
    </ul>
  );
}

// Esto es para declarar el wishlist que le pasamos a la función WishList
// Esto es para definir los propTypes
WishList.propTypes = {
  // El shape es para definir objetos, si en vez de objetos fueran nº, sería .number y no .shape.
  wishes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    done: PropTypes.bool,
    text: PropTypes.string,
  })),
  // Lo declaramos fuera pq sino partiria del objeto wishes
  onWishChange: PropTypes.func.isRequired,
};

WishList.defaultProps = {
  wishes: [],
};

export default WishList;
