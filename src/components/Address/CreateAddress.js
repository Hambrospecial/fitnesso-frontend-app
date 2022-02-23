import React, { useState } from 'react'
import { useForm} from 'react-hook-form';
import Box from '@mui/material/Box';

import '../SignUp/signUp.css';
import {Modal, Typography} from "@mui/material";

const CreateAddress = () => {

    const { register, errors , handleSubmit } = useForm()
    const[address, setAddress] = useState()

    //Modal
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute',
        fontfamily: 'sans-serif',
        borderRadius: '2em',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        backgroundColor: 'white',
        color:'black',
        boxShadow: 24,
        p: 4,
    };


    const onSubmit =(data)=>{
        setAddress(data);
        let req = fetch("http://localhost:9067/address/addAddress", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(address)
        }).then(()=>{
            console.log(req)
        })
        handleOpen()
    }


    return (
            <div className="login-container">
                <div className="addressform">
                    <div className={"addresstop"}>
                        <h3 className="addresstitle">Address</h3>
                        <button className={"goback"}><a href={"/login"}>X</a></button>
                    </div>
                    <form className='form12' onSubmit={handleSubmit(onSubmit)}>
                        <h4 className="user">{}</h4>
                            <input type={'text'} className="username" align="center"
                                   name='userName' placeholder='UserName' {...register('userName', { required: true})}/>

                            <input type="text" className='username' align="center"
                                   placeholder='Street Detail' name='streetDetail' {...register('streetDetail', { required: true})}/>

                            <input type="text" className='username' align="center"
                                   placeholder='State' name='state' {...register('state', { required: true })}/>

                            <input type="text" className='username' align="center"
                                   placeholder='City' name='city' {...register('city', { required: true })}/>


                            <input name='zipCode'  type="text" className='username' align="center"
                                   placeholder='Zip Code' {...register('zipCode', { required: true })}/>

                            <input name='country'  type="text" className='username' align="center"
                                   placeholder='Country' {...register('country', { required: true })}/>

                        <div className="fromgender">
                            <button type='submit' className={"sender"}>Add Address</button>
                        </div>

                    </form>
                </div>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography className={'modalbody'} id="modal-modal-description" sx={{ mt: 2 }}>
                            Verify your account through your email to complete registration
                        </Typography>
                        <button className={"modalcontinue"}><a href="/login" >Continue</a></button>
                    </Box>
                </Modal>
            </div>
    )
}

export default CreateAddress