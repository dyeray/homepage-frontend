import React, {useEffect, useState} from 'react';
import * as mui from '@mui/material';
import Film from './Film';
import {getFilms} from 'utils.js';

export default function FilmList(props) {
    const [filmList, setFilmList] = useState([]);
    const [isLoaded, setLoaded] = useState(false);

    useEffect(() => {
        async function loadFilms() {
            const films = await getFilms();
            setLoaded(true);
            setFilmList(films);
        }
        loadFilms();
    }, []);

    if (!isLoaded) {
        return (
            <mui.Box sx={{ display: 'flex' }}>
                <mui.CircularProgress sx={{ marginLeft: 'auto', marginRight:  'auto', marginTop: '3em'}}/>
            </mui.Box>
        );
    }

    return (
            <mui.Grid container spacing={2} maxWidth="xl" sx={{ marginLeft: 'auto', marginRight: 'auto' }}>
                {filmList.map((film, index) =>
                <mui.Grid item key={index} xs={12} sm={6} md={4} lg={3} xl={2}><Film film={film} index={index+1}/></mui.Grid>
                )}
            </mui.Grid>
    );
}
