import React from 'react';
import PropTypes from 'prop-types';

// A esta función le pasamos los deseos
function WishList({ wishes }) {
  return (
    <ul className="wish-list">
      {wishes.map(({ text, id, done }) => (
        // checked adquiere la propiedad de done, si done es true, ese deseo ya sale marcado
        // eslint-disable-next-line max-len
        // La línea justo de debajo quiere decir que si done es true mete 'wish-list__item--done', y que si es false no mete nada
        <li key={`wish${id}`} className={`wish-list__item ${done ? 'wish-list__item--done' : ''}`}>
          <input type="checkbox" id={`wish${id}`} checked={done} />
          <label htmlFor={`wish${id}`}>{text}</label>
        </li>
      ))}
    </ul>
  );
}

// Esto es para declarar el wishlist que le pasamos a la función WishList
// Esto es para definir los propTypes
WishList.propTypes = {
  wishes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    done: PropTypes.bool,
    text: PropTypes.string,
  })),
};

WishList.defaultProps = {
  wishes: [],
};

export default WishList;
