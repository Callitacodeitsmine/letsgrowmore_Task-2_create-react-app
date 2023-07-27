import React from 'react';
import PropTypes from 'prop-types';

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <h2>{user.first_name} {user.last_name}</h2>
      <p>Email: {user.email}</p>
      {/* Add more user information here if needed */}
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    // Add more prop types for additional user data if needed
  }).isRequired,
};

export default UserCard;
