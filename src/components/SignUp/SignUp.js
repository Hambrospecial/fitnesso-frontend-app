import React, { useState } from 'react'
import { useForm} from 'react-hook-form';

import './signUp.css';
import Footer from "../Main/Footer/Footer";
import Navbar from "../Main/Navbar/Navbar";
import { IconButton, InputAdornment, Modal, Typography} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import Box from "@mui/material/Box";

const Signup = () => {

    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });

    const { register,  errors , handleSubmit } = useForm();

    const[person, setPerson] = useState({
        userName:''
    });

    const[uname, setUname] = useState();

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

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



    //consume API
    const onSubmit =(data)=>{
        setPerson(data);
        let req = fetch("http://localhost:9067/person/register",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(person)
        }).then(()=>{
            console.log(req)
        })
        handleOpen()
    }

    return (
        <div>
        <Navbar/>
        <div className='main'>
            <div className='signup-container'>
                <h3 className={"sign"}>Create Account</h3>
                <form className='form1' onSubmit={handleSubmit(onSubmit)}>
                    <div className={"forminput"}>
                        <input type="text" className='inputers' align="center"
                                placeholder='First Name' name="firstName" {...register("firstName", { required: true, minLength: 2})} aria-describedby="component-error-text"/>

                        <input type="text" className='inputers twin' align="center"
                               placeholder='Last Name' name='lastName' {...register('lastName', { required: true, minLength: 2  })} aria-describedby="component-error-text"/>
                    </div>

                    <div className={"forminput"}>
                        <input type="text" className='inputers' align="center"
                               placeholder='Username' name='userName'  {...register('userName',
                            { required: true })} aria-describedby="component-error-text" />

                        <input type={values.showPassword ? 'text' : 'password' } {...register('password', { required: "Password is Required", minLength: {value: 8} })} className='inputers twin' align="center"
                               placeholder='Password' name='password' endadornment={ <InputAdornment position="end">
                            <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword} edge="end">{values.showPassword ?  <Visibility /> :
                            <VisibilityOff /> } </IconButton> </InputAdornment>} aria-describedby="component-error-text"/>


                    </div>
                    <div className={"forminput"}>
                        <input name='email'  type="email" className='inputers' align="center"
                               placeholder='Email' {...register('email',
                            { required: true, pattern:{value:/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/} })}
                               aria-describedby="component-error-text"/>

                        <input name='phoneNumber'  type="number" className='inputers twin' align="center"
                               placeholder='Phone Number' {...register('phoneNumber',
                            { required: "Phone Number is Required", pattern:{value:/^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{9}$/} })}
                               aria-describedby="component-error-text"/>
                    </div>
                    <div className='reg fromgender' aria-describedby="component-error-text">
                        <label className='gender' id="demo-row-radio-buttons-group-label"><strong>Gender:</strong></label>
                        <input name='gender' value="Male" type="radio" {...register('gender', { required: "Gender is Required" })} />  <label  className='gender'>Male </label>
                        <input  name='gender' value="Female"  type="radio" {...register('gender', { required: "Gender is Required" })}/>  <label  className='gender'>Female </label>
                        <input  name='gender'  value="Others" type="radio" {...register('gender', { required: "Gender is Required" })}/>  <label  className='gender'>Other</label>
                    </div>

                    <div className={" fromgender"}>
                        <input type="date" name='dateOfBirth' className='inputers' align="center"
                               placeholder='Date of Birth' {...register('dateOfBirth',
                            { required: "Date of Birth is Required" })} aria-describedby="component-error-text" />

                    </div>

                    <div className={"fromgender"}>
                        <button type='submit' className='sender'>Create Account</button>
                    </div>

                    <hr/>
                    <div className="fromgender">
                        <h5>Already have an account?</h5>
                        <a href="/login" className='btn-sm buttn'>LOGIN</a>
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
                        Create Address
                    </Typography>
                    <button className={"modalcontinue"}><a href="/createaddress"  >Continue</a></button>
                </Box>
            </Modal>
        </div>
        <Footer/>
    </div>
    )
}

export default Signup