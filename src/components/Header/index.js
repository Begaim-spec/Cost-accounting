import React from 'react';
import {Box, Button} from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {useDispatch, useSelector} from "react-redux";
import {clearAll} from "../../redux/actions/moneyAction";


const Header = () => {
    const dispatch = useDispatch()
    const user = useSelector(store => store.user)
    return (
        <Box sx={{ flexGrow: 1, marginBottom: '25px'}}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {
                            user.name.length ?  user.name.concat("'s money") : 'Ваше имя'
                        }
                    </Typography>
                    <Button color="inherit" onClick={() => dispatch(clearAll())}>Сбросить все</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;