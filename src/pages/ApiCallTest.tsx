import { useState } from "react";
export function ApiCallTest() {
    const [movies, setMovies] = useState([]);


    const makeAPICall = async () => {
        const url = 'https://api.npoint.io/6a05464df2e972fdbf16';
        const response = await fetch(url);
        const body = await response.json();
        const items = body["movies"];
        setMovies(items);
    };

    return (
        <div>
            <button onClick={makeAPICall}>Call</button>
            {movies.map((movie) => {
                return (
                    <div>

                        <h3>{movie["title"]}</h3>
                        <p>{movie["overview"]}</p>
                    </div>

                );
            })}
        </div>
    );
}

export default ApiCallTest;
