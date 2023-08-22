const API = "https://api.themoviedb.org/3";

export function get(path) {
    return fetch(API + path, {
        headers: {
            Authorization: 
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjU4Mzc3ZWY3MTJkZDExOTJkYmM4ZTNjOWNkMTliMiIsInN1YiI6IjY0ZGE2ZmRhNzcxOWQ3MDBjODVmZWFmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qGCnLSzAl4nK4Vn8aed9BbnXn3c39zbyq8LoqolzFdI",
            "Content-Type" : "accept: application/json",
        },
    }).then((result) => result.json())
}