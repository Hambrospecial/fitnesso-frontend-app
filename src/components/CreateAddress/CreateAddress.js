import React, { useState } from 'react'
import { useForm} from 'react-hook-form';
import Box from '@mui/material/Box';
import {Modal, Typography} from "@mui/material";
import '../Signup/signup.css';
const CreateAddress = () => {
    const { register, handleSubmit, formState: {errors} } = useForm()
    const[address, setAddress] = useState()
    const[response, setResponse] = useState()
    const[uname, setUname] = useState();
    const [generalError, setGeneralError] = useState();
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
    const backendValidator = (e, d) =>{
        if(e === "incorrect username"){
            // alert("UserName is already taken");
            setGeneralError("UserName is not correct")
        }else{
            setGeneralError()
            setUname(d)
            handleOpen()
        }
    }
    const onSubmit = async (data) =>{
        // setAddress(data);
        let res = await fetch("http://localhost:9067/address/addAddress", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
        let info = await res.json();
        console.log(info);
        let received = info.message;
        console.log("message: ", received)
        backendValidator(received, data.userName)
    }
    return (
            <div className="login-container">
                <div className="addressform">
                    <div className={"addresstop"}>
                        <h3 className="addresstitle">Address</h3>
                        <button className={"goback"}><a href={"/signup"}>X</a></button>
                    </div>
                        <h5 className="generalError">{generalError}</h5>
                    <form className='form12' onSubmit={handleSubmit(onSubmit)}>
                        <h4 className="user">{}</h4>
                            <input type={'text'} className="inputers2" align="center"
                                   name='userName' placeholder='UserName' {...register('userName', { required: true})}/>
                        <div className={"errors"}>
                            <h6 >{errors.userName && <span>input your username</span>}</h6>
                        </div>
                            <input type="text" className='inputers2' align="center"
                                   placeholder='Street Detail' name='streetDetail' {...register('streetDetail', { required: true})}/>
                        <div className={"errors"}>
                            <h6 >{errors.streetDetail && <span>street Detail is required</span>}</h6>
                        </div>
                            <input type="text" className='inputers2' align="center"
                                   placeholder='State' name='state' {...register('state', { required: true })}/>
                        <div className={"errors"}>
                            <h6 >{errors.state && <span>state is required</span>}</h6>
                        </div>
                            <input type="text" className='inputers2' align="center"
                                   placeholder='City' name='city' {...register('city', { required: true })}/>
                        <div className={"errors"}>
                            <h6 >{errors.city && <span>city is required</span>}</h6>
                        </div>
                            <input name='zipCode'  type="text" className='inputers2' align="center"
                                   placeholder='Zip Code' {...register('zipCode', { required: true })}/>
                        <div className={"errors"}>
                            <h6 >{errors.zipCode && <span>Zip Code is required</span>}</h6>
                        </div>
                            <input name='country'  type="text" className='inputers2' align="center"
                                   placeholder='Country' {...register('country', { required: true })}/>
                        <div className={"errors"}>
                            <h6 >{errors.country && <span>Country is required</span>}</h6>
                        </div>
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
                            {uname} Please Verify your account through your email to complete registration
                        </Typography>
                        <button className={"modalcontinue"}><a href="/login" >Continue</a></button>
                    </Box>
                </Modal>
            </div>
    )
}
export default CreateAddress