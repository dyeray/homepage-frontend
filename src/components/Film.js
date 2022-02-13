import React from 'react';
import * as mui from '@mui/material';

export default function Film(props) {
    return (
        <mui.Paper sx={{textAlign: 'center', width: '15em'}}>
            <mui.Box component="h3" sx={{display: "-webkit-box", "-webkit-line-clamp": "2", "-moz-box-orient": "vertical", overflow: "hidden", height: "2.2em", "line-height": "1.1em"}}>{props.film.title}</mui.Box>
            <img src={`${props.film.image}`} alt="image" />
            <mui.Divider variant="middle" />
            <mui.ButtonGroup variant="contained" aria-label="outlined primary button group">
                <mui.Button href={`https://thepiratebay.org/search.php?q=${encodeURIComponent(props.film.title)}`} target="_blank">TPB</mui.Button>
                <mui.Button href={`https://1337x.to/search/${encodeURIComponent(props.film.title)}/1/`} target="_blank">1337x</mui.Button>
                {/*<mui.Button>Magnet</mui.Button>*/}
            </mui.ButtonGroup>
        </mui.Paper>
    );
}
