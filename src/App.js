import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import "./movie.css";

class App extends React.Component {

  constructor(props){
    super(props);
    this.state= {
      isLoading: true,
      keyword:'',
      movies:[],
    };
  }

  onChangehandler = (e) => {
    this.setState({
      keyword: e.target.value,
    })
  };
  getMovies = async ()=> {
    const {data: {data: {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    console.log({movies});
      this.setState({
        movies,
        isLoading:false,
      });
  };
  componentWillMount() {
    this.getMovies();
  };
  render(){
   
    const searchComponent = (data) => {
      data = data.filter(
        (search) =>{
            return (search.genres[0].toLowerCase()
            .indexOf(this.state.keyword.toLowerCase()) > -1);
        }
    );
      return data.map((search, i) => {
        return (<Movie search={search} key={i}/>);
      });
    };
    const {isLoading, movies} = this.state;
    return(
      <section className="container">
      { isLoading ? (
        <div className="loader">
          <span className="loader_text">Loading...</span>
        </div>
      ) : (
        <>
        <div className="search">
          장르 :<input 
                name ="keyword" value={this.state.keyword}
                 onChange={this.onChangehandler} 
                 placeholder="장르검색">
                 </input>
        </div>
        <div className="movies">
           {searchComponent(movies)}   
        </div>
        </>
        )}
      </section>
    );
  }
}

export default App;