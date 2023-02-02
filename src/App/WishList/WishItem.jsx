import React from 'react';
import PropTypes from 'prop-types';

function WishItem({
  id, done, text, onDoneChange,
}) {
  return (
    // checked adquiere la propiedad de done, si done es true, ese deseo ya sale marcado
    // eslint-disable-next-line max-len
    // La línea justo de debajo quiere decir que si done es true mete 'wish-list__item--done', y que si es false no mete nada
    <li className={`wish-list__item ${done ? 'wish-list__item--done' : ''}`}>
      <input type="checkbox" id={`wish${id}`} checked={done} onChange={(e) => onDoneChange(e.target.checked)} />
      <label htmlFor={`wish${id}`}>{text}</label>
    </li>
  );
}

// Las props se marcan como isRequired o se definen como defaultProps
WishItem.propTypes = {
  id: PropTypes.number.isRequired,
  done: PropTypes.bool,
  text: PropTypes.number,
  onDoneChange: PropTypes.func.isRequired,
};

WishItem.defaultProps = {
  done: false,
  text: '',
};

export default WishItem;
