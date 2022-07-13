import config from 'config.js';


function cacheStore(key, value) {
    let entry = {
        timestamp: Date.now(),
        value: value
    };
    window.localStorage.setItem(key, JSON.stringify(entry));
}

function cacheRetrieve(key) {
    let cached = window.localStorage.getItem(key);
    if (cached == null) {
        return null;
    }
    let entry = JSON.parse(cached);
    return (Date.now() - entry.timestamp > 86400000)? null : entry.value;
}

async function getFilmsFromNetwork() {
    try {
        const response = await fetch(config.backend_url);
        var data = response.json();
    } catch(error) {
        console.error(error.message);
        return null;
    }
    return data;
}

export async function getFilms() {
    const filmsFromCache = cacheRetrieve('FilmList');
    if (filmsFromCache != null) {
        return filmsFromCache;
    }
    const filmsFromNetwork = await getFilmsFromNetwork();
    if (filmsFromNetwork != null && filmsFromNetwork.length !== 0) {
        cacheStore('FilmList', filmsFromNetwork);
    }
    return filmsFromNetwork;
}
