import React from 'react';

const NavBar = () => {
  return (
    <nav>
      <div>movieMania</div>
      <div>
        <input type="text" name="movie" placeholder="Search movies..." />
      </div>
      <div>
        <span>Found X results</span>
      </div>
    </nav>
  );
};

export default NavBar;
