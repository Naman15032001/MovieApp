import React, { Component } from 'react'
import { movies } from './getMovies'

export default class extends Component {

    constructor() {
        super();
        this.state = {
            genres: [],
            currgen: 'All Genres'
        }
    }

    render() {
        const movie = movies.results;
        let genreids = {
            28: 'Action', 12: 'Adventure', 16: 'Animation', 35: 'Comedy', 80: 'Crime', 99: 'Documentary', 18: 'Drama', 10751: 'Family', 14: 'Fantasy', 36: 'History',
            27: 'Horror', 10402: 'Music', 9648: 'Mystery', 10749: 'Romance', 878: 'Sci-Fi', 10770: 'TV', 53: 'Thriller', 10752: 'War', 37: 'Western'
        };
        let temp = [];
        console.log(movie.length);
        movie.forEach((movie) => {
            if (!temp.includes(genreids[movie.genre_ids[0]])) {
                temp.push(genreids[movie.genre_ids[0]]);
            }
        })
        console.log(temp.length);
        temp.unshift('All Genres');

        console.log(temp);

        // this.setState({
        // genres: [...temp]
        // });



        return (
            <div>
                <>
                    <div className='main'>
                        <div className='row'>
                            <div className='col-3'>
                                <ul class="list-group favorites-genres">
                                    {
                                        temp.map((genre) => (
                                            this.state.currgen===genre?
                                            <li class="list-group-item" style={{ background: '#3f51b5', color: 'white', fontWeight: 'bold' }}>{genre}</li>
                                            :
                                            <li class="list-group-item" style={{ background: 'white', color: '#3f51b5' }}>{genre}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className='col-9 favourites-table'>
                                <div className="row">
                                    <input type="text" className='input-group-text col' placeholder='Search'/>
                                    <input type="number" className='input-group-text col' placeholder='Rows Count' />
                                </div>
                                <div className="row">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Title</th>
                                                <th scope="col">Genre</th>
                                                <th scope="col">Popularity</th>
                                                <th scope="col">Rating</th>
                                                <th scope="col"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                movie.map((movie) => (
                                                    <tr>
                                                        <td> <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} style={{ width: '5rem' }} /> {movie.original_title}</td>
                                                        <td>{genreids[movie.genre_ids[0]]}</td>
                                                        <td>{movie.popularity}</td>
                                                        <td>{movie.vote_average}</td>
                                                        <td><button type="button" class="btn btn-danger">Delete</button></td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                                <nav aria-label="Page navigation example">
                                    <ul class="pagination">
                                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    </ul>
                                </nav>

                            </div>
                        </div>
                    </div>
                </>
            </div>
        )
    }
}
