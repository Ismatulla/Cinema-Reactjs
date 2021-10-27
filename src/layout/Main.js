import {Component} from 'react';
import Movies from "../component/Movies";
import Loader from "../component/Loader";
import Search from "../component/Search";

export default  class Main extends Component{
    state = {
        movies:[],
        loading:true
    }
    componentDidMount=()=>{
        fetch('http://www.omdbapi.com/?apikey=91d115cb&s=iron')
            .then(response=>response.json())
            .then(data=>this.setState({movies:data.Search,loading:false}))
    }
    searchMovies=(str,type='all')=>{
        fetch(`http://www.omdbapi.com/?apikey=91d115cb&s=${str}${type!=='all'? `&type=${type}`:''}`)
            .then(response=>response.json())
            .then(data=>this.setState({movies:data.Search,loading:false}))
    }
    render(){

        return (
            <div className='container content'>
                <Search searchMovies={this.searchMovies}/>
                {this.state.loading?<Loader/> :(<Movies movies={this.state.movies}/>) }

            </div>

        );
    }

}

