import React, {useState} from 'react';
import {Button, FormControl, FormHelperText, Grid, Input, InputLabel, OutlinedInput, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import {useFormik} from "formik";
import * as Yup from "yup";
import {useDispatch, useSelector} from "react-redux";
import {addCost} from "../../redux/actions/moneyAction";

const SignupForm = () => {
        const dispatch = useDispatch()
        const formik = useFormik({
            initialValues: {
                title: '',
                amount: '',
            },
            validationSchema: Yup.object({
                // date:  Yup.string().required('Required'),
                title: Yup.string()
                    .max(20, 'Mаксимум 20 слов')
                    .required('Пожалуйста, напишите на что будет потрачено'),
                amount: Yup.number().required('Required')
            }),
            onSubmit: (values, {resetForm}) => {
                dispatch(addCost(values))
                resetForm()
            },
        });
        const [isFormInvalid, setIsFormInvalid] = useState(false);
    const validate = values => {
        if (values !== "") {
            setIsFormInvalid(false);
        } else {
            setIsFormInvalid(true);
            console.log(values.title)
        }
    };
    return (
            <form
                // component="form"
                // noValidate
                autoComplete="off"
                onSubmit={formik.handleSubmit}
            >
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <TextField id="title"
                                   label="На что потратил"
                                   variant="standard"
                                   sx={{width: '100%'}}
                                   name='title'
                                   value={formik.values.title}
                                   onChange={formik.handleChange}
                                   error={formik.touched.title && Boolean(formik.errors.title)}
                                   helperText={isFormInvalid && "api key required"}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            id="datetime-local"
                            label="Next appointment"
                            type="datetime-local"
                            defaultValue="2017-05-24"
                            sx={{ width: 250 }}
                            name='date'
                            value={formik.values.date}
                            onChange={formik.handleChange}
                            error={formik.touched.date && Boolean(formik.errors.date)}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField id="standard-basic"
                                   label="Сумма"
                                   variant="standard"
                                   sx={{width: '100%'}}
                                   name='amount'
                                   value={formik.values.amount}
                                   onChange={formik.handleChange}
                                   error={formik.touched.amount && Boolean(formik.errors.amount)}
                        />
                    </Grid>
                </Grid>
                <Box sx={{display: 'flex', justifyContent: 'flex-end', marginTop: '20px'}}>
                    <Button variant="contained" type='submit' onClick={validate}>Добавить</Button>
                </Box>
            </form>
        );
    };
    export default SignupForm;