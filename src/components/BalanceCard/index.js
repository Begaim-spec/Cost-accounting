import React from 'react';
import {useSelector} from "react-redux";
import {Card, CardContent, Grid} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const BalanceCard = () => {
    const {costs, initialAmount, currentBalance}= useSelector(s => s.money)
    return (
        <Grid container spacing={4} sx={{marginBottom: '30px', marginTop: '10px'}}>
            <Grid item xs={4} md={4}>
                <Card sx={{minWidth: 100}}>
                    <Box sx={{bgcolor: '#0000FF', color: 'primary.contrastText', p: 2}}>
                        <CardContent>
                            <Typography   gutterBottom>
                                <h3 color="text.secondary">${initialAmount} </h3>
                            </Typography>
                            <Typography variant="h5" component="div">
                                <p>Поступило</p>
                            </Typography>
                        </CardContent>
                    </Box>
                </Card>
            </Grid>
            <Grid item xs={4} md={4}>
                <Card sx={{minWidth: 100}}>
                    <Box sx={{bgcolor: '#A3EBB1', color: 'primary.contrastText', p: 2}}>
                        <CardContent>
                            <Typography color="text.secondary" gutterBottom>
                                <h3 color="text.secondary">${costs}</h3>
                            </Typography>
                            <Typography variant="h5" component="div">
                                <p>Расходы</p>
                            </Typography>
                        </CardContent>
                    </Box>
                </Card>
            </Grid>
            <Grid item xs={4} md={4}>
                <Card>
                    <Box sx={{bgcolor: '#21B6A8', color: 'primary.contrastText', p: 2}}>
                        <CardContent>
                            <Typography color="text.secondary" gutterBottom>
                                <h3 color="white">${currentBalance}</h3>
                            </Typography>
                            <Typography variant="h5" component="div">
                                <p>Остаток</p>
                            </Typography>
                        </CardContent>
                    </Box>
                </Card>
            </Grid>
        </Grid>
    );
};

export default BalanceCard;
