import React from 'react';
import PropTypes from 'prop-types';

// Esta función hace que se returne un label entre <h1>
function Header({ label }) {
  return (
    <h1>{label}</h1>
  );
}

// Esto es para declarar el proptype
Header.propTypes = {
  label: PropTypes.string.isRequired,
};

// Este es para que cuando declare HEADER ya tenga un valor por defecto.
// Header.defaultProps = {
// label: 'My wishList',
// };

export default Header;
