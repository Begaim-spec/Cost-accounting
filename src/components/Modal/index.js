import React, {useState} from 'react';
import {Backdrop, Button, Fade, Modal, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {useDispatch} from "react-redux";
import {addUser} from "../../redux/actions/userAction";

const UserModal = () => {
    const [open, setOpen] = React.useState(true);
    const dispatch = useDispatch()
    const [username, setUsername] = useState('')
    const handleChange = (e) => {
        setUsername(e.target.value)
    }
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const handleSubmit = () => {
        dispatch(addUser(username))
        setOpen(false)
    }
    return (
        <div>
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <form onSubmit={handleSubmit}>
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Введите свое имя
                        </Typography>
                        <Typography id="modal-modal-description" sx={{mt: 2}}>
                            <TextField id="standard-basic"
                                       label="Введите имя"
                                       variant="standard"
                                       sx={{width: '100%'}}
                                       name=' username'
                                       autoComplete='off'
                                       value={username}
                                       onChange={handleChange}
                                       required='true'
                                       error={('Имя обязательно!')}
                            />
                        </Typography>
                        <Button variant="contained" type='submit'
                                sx={{display: 'block', marginTop: '20px', marginLeft: 'auto'}}>Добавить</Button>
                    </Box>
                </form>
            </Modal>
        </div>
    );
};

export default UserModal;