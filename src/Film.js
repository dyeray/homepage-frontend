import React from 'react';
import * as mui from '@mui/material';
import {ReactComponent as tpbIcon} from "./icons/result2.svg"

export default function Film(props) {
    return (
        <mui.Paper sx={{textAlign: 'center'}}>
            <img src={`/${props.index}.jpg`} alt="image" />
            <mui.Divider variant="middle" />
            <mui.ButtonGroup variant="contained" aria-label="outlined primary button group">
                <mui.Button>TPB</mui.Button>
                <mui.Button>1337x</mui.Button>
                <mui.Button>Magnet</mui.Button>
            </mui.ButtonGroup>
        </mui.Paper>
    );
}
