import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ onGetUsers }) => {
  return (
    <nav className="navbar">
      <div className="brand">Your Brand Name</div>
      <button className="get-users-button" onClick={onGetUsers}>
        Get Users
      </button>
    </nav>
  );
};

Navbar.propTypes = {
  onGetUsers: PropTypes.func.isRequired,
};

export default Navbar;