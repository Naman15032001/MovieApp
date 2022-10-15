import React, { Component } from 'react'
// import { movies } from './getMovies';
import axios from 'axios';

export default class Movies extends Component {

    constructor() {
        super();
        this.state = {
            hover: '',
            parr: [1],
            currPage: 1,
            movies: []
        }
    }

    async componentDidMount() {
        //side effects
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=13a3ca0ad12df1fa76d1f4805f4f279b&language=en-US&page=${this.state.currPage}`);
        let data = res.data;
        this.setState({
            movies: [...data.results]
        })
        console.log(data);
        console.log("mounting done......");
    }

    changeMovies = async () => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=13a3ca0ad12df1fa76d1f4805f4f279b&language=en-US&page=${this.state.currPage}`);
        let data = res.data;
        this.setState({
            movies: [...data.results]
        })
    }

    handleRight = async () => {
        let temparr = [];
        for (let i = 1; i <= this.state.parr.length + 1; i++) {
            temparr.push(i);
        }


        this.setState({
            parr: [...temparr],
            currPage: this.state.currPage + 1
        }, this.changeMovies)

    }

    handleLeft = () => {

        if (this.state.currPage !== 1) {
            this.setState({
                currPage: this.state.currPage - 1
            }, this.changeMovies)
        }

    }

    handleClick = (value) => {

        if(value!==this.state.currPage){
            this.setState({
                currPage: value
            }, this.changeMovies)
        }

    }

    render() {
        console.log("render done......");
        //let movie = movies.results;
        return (
            <>
                {
                    this.state.movies.length == 0 ?
                        <div class="spinner-border text-primary" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div> :
                        <div>
                            <h3 className="text-center"><strong>Trending</strong></h3>
                            <div className='movies-list'>
                                {
                                    this.state.movies.map((movie) => (

                                        <div className="card movies-card" onMouseEnter={() => this.setState({ hover: movie.id })} onMouseLeave={() => this.setState({ hover: '' })}>
                                            <img className="card-img-top movies-img" src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} />
                                            {/* <div className="card-body"> */}
                                            <h5 className="card-title movies-title">{movie.title}</h5>
                                            {/* <p className="card-text movies-text">{movie.overview}</p> */}
                                            <div className='button-wrapper' style={{ display: "flex", width: "100%", justifyContent: "center" }}>
                                                {
                                                    this.state.hover === movie.id &&
                                                    <a className="btn btn-primary movies-btn">Add to favourite</a>
                                                }
                                            </div>

                                            {/* </div> */}
                                        </div>

                                    ))
                                }
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <nav aria-label="Page navigation example">
                                    <ul class="pagination">
                                        <li class="page-item"><a class="page-link" onClick={this.handleLeft}>Previous</a></li>
                                        {
                                            this.state.parr.map((value) => (
                                                <li class="page-item"><a class="page-link" onClick={() => this.handleClick(value)}>{value}</a></li>
                                            ))
                                        }
                                        <li class="page-item"><a class="page-link" onClick={this.handleRight}>Next</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                }

            </>
        )
    }
}
