import React, {useEffect, useState} from 'react';
import * as mui from '@mui/material';
import Film from './Film';
import config from 'config.js';
import {cacheStore, cacheRetrieve} from 'utils.js';

export default function FilmList(props) {
    const [filmList, setFilmList] = useState([]);
    const [isLoaded, setLoaded] = useState(false);

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

    async function getFilms() {
        const filmsFromCache = cacheRetrieve('FilmList');
        if (filmsFromCache != null) {
            return filmsFromCache;
        }
        const filmsFromNetwork = await getFilmsFromNetwork();
        if (filmsFromNetwork != null) {
            cacheStore('FilmList', filmsFromNetwork);
        }
        return filmsFromNetwork;
    }

    async function loadFilms() {
        const films = await getFilms();
        setLoaded(true);
        setFilmList(films);
    }

    useEffect(() => {
        loadFilms();
    }, []);

    if (!isLoaded) {
        return (<h1>Loading</h1>);
    }

    return (
        <mui.Box sx={{ backgroundColor: 'LightGrey'}}>
            <mui.Grid container spacing={2} maxWidth="xl" sx={{ marginLeft: 'auto', marginRight: 'auto' }}>
                {filmList.map((film, index) =>
                <mui.Grid item key={index} xs={12} sm={6} md={4} lg={3} xl={2}><Film film={film} index={index+1}/></mui.Grid>
                )}
            </mui.Grid>
        </mui.Box>
    );
}
