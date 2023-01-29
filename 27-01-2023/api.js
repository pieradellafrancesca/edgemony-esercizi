const API_KEY = 'fd328e114a7184f554f1780d6df12c35';
const BASE_URL = 'https://api.themoviedb.org/3/';


// https://api.themoviedb.org/3/tv/{tv_id}?api_key=fd328e114a7184f554f1780d6df12c35

const GET = async (type, resource) => {
    const res = await fetch(`${BASE_URL}${type}/${resource}?api_key=${API_KEY}`);
    const data = await res.json();
    return data
};

// https://api.themoviedb.org/3/search/tv?api_key=fd328e114a7184f554f1780d6df12c35&query=wed

const GET2 = async (type, search) => {
    const res = await fetch(`${BASE_URL}search/${type}?api_key=${API_KEY}&query=${search}`);
    const data = await res.json();
    return data
};

export { GET, GET2 };