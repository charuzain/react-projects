import React from 'react';

const NavBar = ({ query, queryHandler }) => {
  // const queryHandler = (e) => {
  //   setQuery(e.target.value);
  // };
  return (
    <nav>
      <div>movieMania</div>
      <div>
        <input
          type="text"
          name="movie"
          placeholder="Search movies..."
          value={query}
          onChange={queryHandler}
        />
      </div>
      <div>
        <span>Found X results</span>
      </div>
    </nav>
  );
};

export default NavBar;
