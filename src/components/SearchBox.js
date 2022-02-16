import React, {useState} from 'react';
import * as mui from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBox(props) {

    const [searchTerm, setSearchTerm] = useState('');

    function search() {
        window.location.href = `https://duckduckgo.com/?q=${searchTerm}`;
    }

    function keyPress(e){
        if(e.keyCode === 13){
           search();
        }
    }

    function handleChange(e) {
        setSearchTerm(e.target.value);
    }

    return (
        <mui.Paper sx={{marginTop: '20em'}}>
            <mui.TextField id="outlined-basic" label="Search the Web" variant="outlined" onKeyDown={keyPress} onChange={handleChange} />
            <mui.IconButton aria-label="search" onClick={search}>
                <SearchIcon />
            </mui.IconButton>
        </mui.Paper>
    );
}
