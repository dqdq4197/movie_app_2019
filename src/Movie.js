import React from 'react';



class Movie extends React.Component {
  
  star=()=> {
    const point= parseInt(this.props.search.rating);
    const str=[];
    for(let i=0; i<(point/2)-1;i++){
      str[i]="★";
    }
    return str.join("");
  };
  render() {

    return (
      <div className="poster">
          <div className="imgwrap"> 
            <img src={this.props.search.medium_cover_image} className="poster_image"  alt={this.props.search.title} title={this.props.search.title}/>
          </div>
          <div className="content">
            <h3>{this.props.search.title}</h3>
            <span>{this.props.search.year}</span>
            <ul>
              {this.props.search.genres.map((genre,index) => (
                  <li key={index} className="genres">
                    {genre}
                  </li>
              ))}
            </ul>
            <h5>{
              this.star()
            }({this.props.search.rating})</h5>
            <p>{this.props.search.summary.slice(0,140)}...</p>
          </div>
      </div>  
    );
}
}

export default Movie;