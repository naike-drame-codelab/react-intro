import { useState } from "react";

const Movie = () => {
    // const [movie, setMovie] = useState({
    //     title: "The Godfather",
    //     ratings: 8.7
    // });

    // const handleClick = () => {
    //     // const copyMovie = { 
    //     //     ...movie,
    //     //     ratings: 9.2
    //     // };

    //     setMovie({ ...movie, ratings: 9.2});
    // }

    const[movies, setMovies] = useState([
        {
            id: 1,
            title: "The Godfather",
            ratings: 8.7
        },
        {
            id: 2,
            title: "Parasite",
            ratings: 9.3
        },
        {
            id: 3,
            title: "The Dark Knight",
            ratings: 9.0
        }
    ]);

    const handleClick = () => {
        setMovies(movies.map((m) => m.id === 1 ? { ...m, title: "Spiderman" } : m));
    }

    return (
        <>
            {movies.map((m) => (
                <li key={m.id}>{m.title} - {m.ratings}</li>
            ))}

            <button onClick={handleClick}>Change Movie Title</button>

        </>
    )

}

export default Movie;