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
        <mui.Paper sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
          <mui.InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search the Web"
            inputProps={{ 'aria-label': 'search' }}
            onKeyDown={keyPress}
            onChange={handleChange}
          />
          <mui.IconButton sx={{ p: '10px' }} aria-label="search" onClick={search}>
            <SearchIcon />
          </mui.IconButton>
        </mui.Paper>
      );
}
