import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useDispatch, useSelector} from "react-redux";
import {Button} from "@mui/material";
import Sort from './descendant.png'
import {clearItem, sortMoney} from "../../redux/actions/moneyAction";

const ShowData = () => {
    const dispatch = useDispatch()
    const money = useSelector(store => store.money.tasks)
    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];

    return (
        <>
            {
                money ? <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650, marginTop: '30px' }} aria-label="simple table">
                        <TableHead sx={{backgroundColor: 'lightblue'}}>
                            <TableRow>
                                <TableCell>Дата</TableCell>
                                <TableCell align="right">Расходы</TableCell>
                                <TableCell align="right"  onClick={() => dispatch(sortMoney())}>Сумма

                                </TableCell>
                                <TableCell align="right">Удалить</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {money.map((row, index) => (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.date}
                                    </TableCell>
                                    <TableCell align="right">{row.title}</TableCell>
                                    <TableCell align="right">{row.amount}</TableCell>
                                    <TableCell align="right">
                                        <Button
                                            variant="outlined" color="error"
                                            onClick={() => dispatch(clearItem(index))}
                                        >
                                            Удалить</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer> : <h2>Список пуст</h2>
            }
        </>
    );
};

export default ShowData;