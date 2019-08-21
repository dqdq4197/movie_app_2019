import React from 'react';



function Movie({year, title, summary, poster, genres,rating}) {

  const star=()=> {
    const point= parseInt(rating);
    const str=[];
    for(let i=0; i<(point/2)-1;i++){
      str[i]="★";
    }
    return str.join("");
  };
    return (
      <div className="poster">
          <div className="imgwrap"> 
            <img className="poster_image" src={poster} alt={title} title={title}/>
          </div>
          <div className="content">
            <h3>{title}</h3>
            <span>{year}</span>
            <ul>
              {genres.map((genre,index) => (
                  <li key={index} className="genres">
                    {genre}
                  </li>
              ))}
            </ul>
            <h5>{
              star()
            }({rating})</h5>
            <p>{summary.slice(0,140)}...</p>
          </div>
      </div>  
    );
}

export default Movie;