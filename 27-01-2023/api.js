const API_KEY = 'fd328e114a7184f554f1780d6df12c35';
const BASE_URL = 'https://api.themoviedb.org/3/tv/';


// 'https://api.themoviedb.org/3/movie/550?api_key=fd328e114a7184f554f1780d6df12c35'

const GET = async (resource = '549') => {
    const res = await fetch(`${BASE_URL}${resource}?api_key=${API_KEY}`);
    const data = await res.json();
    return data
};

export { GET };