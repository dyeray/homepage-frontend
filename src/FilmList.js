import React from 'react';
import * as mui from '@mui/material';
import Film from './Film';
import * as colors from '@mui/material/colors';

export default function FilmList(props) {

    useEffect(() => {
        fetch("https://www.metacritic.com/browse/dvds/release-date/new-releases/date")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setUsers(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
      }, [])

    return (
        <mui.Box sx={{ backgroundColor: 'LightGrey', height: '100vh' }}>
            <mui.Grid container spacing={2} maxWidth="xl" sx={{ marginLeft: 'auto', marginRight: 'auto' }}>
                {Array(6).fill(null).map((_, index) =>
                <mui.Grid item key={index} xs={12} sm={6} md={4} lg={3} xl={2}><Film index={index+1}/></mui.Grid>
                )}
            </mui.Grid>
        </mui.Box>
    );
}
