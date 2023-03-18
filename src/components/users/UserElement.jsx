import React from "react";
import PropTypes from "prop-types";

const UserElement = ({ user }) => {
  return (
    <div className='post'>
      <div className='postContent'>
        <strong>
          {user.id}. {user.name} <br /> UserName: {user.username}
        </strong>
        <div>{user.email}</div>
      </div>
      <div></div>
    </div>
  );
};

UserElement.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserElement;
