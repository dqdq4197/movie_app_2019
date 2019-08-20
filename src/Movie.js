import React from 'react';



function Movie({year, title, summary, poster, genres}) {
    return (
      <div>
          <img src={poster} alt={title} title={title}/>
          <div>
          <h3>{year}{title}</h3>
          </div>
      </div>  
    );
}

export default Movie;