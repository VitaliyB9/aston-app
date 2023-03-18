import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbarLinks'>
        <Link to='/users'>Users</Link>
        <Link to='/posts'>Posts</Link>
        <Link to='/todos'>Todos</Link>
        <Link to='/comments'>Comments</Link>
      </div>
    </div>
  );
};

export default Navbar;
