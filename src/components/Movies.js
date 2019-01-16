import React from 'react';
import './card.css';

class Movies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/list/103068?api_key=b4929d4eb4dba66305b07e7bf8ee39f0&language=pl")
            .then(res => res.json())
            .then(
                (item) => {
                    this.setState({
                        isLoaded: true,
                        items: item.items,
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="card">
                {items.map(item => (
                    <div className="ui card" style={{ backgroundColor: 'black'}}>
                <p className="image">
                    <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} key={item.title} alt="poster"/>
                        </p>
                    <div className="content" style={{backgroundColor: 'black'}}>
                        <p className="header" style={{color: 'white'}} href="#" key={item.title}> {item.title} </p>
                    </div>
            </div>
            ))}
            </div>
                )
        }
    }
}

export default Movies;