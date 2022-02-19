import React from 'react';
import ReactDOM from 'react-dom';
import * as mui from '@mui/material';
import SearchBox from './components/SearchBox.js';
import FilmList from './components/FilmList.js';

ReactDOM.render(
    <mui.Box>
        <SearchBox/>
        <FilmList/>
    </mui.Box>,
    document.getElementById('root')
);
