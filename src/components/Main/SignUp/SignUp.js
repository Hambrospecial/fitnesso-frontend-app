import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button, Modal} from 'react-bootstrap';
import { useForm} from 'react-hook-form';
import Box from '@mui/material/Box';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';

import './signUp.css';
import CreateAddress from "../Address/CreateAddress";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Signup = () => {

    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });

    const [username, setUserName] =useState();

    const { register, formState: { errors }, handleSubmit } = useForm();

    const[person, setPerson] = useState({
        userName: '',
    });

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    //for modal
    const[show, setShow] = useState(false);

    const handleShow = () => setShow(true);

    const handleClose = () => setShow(false);


    //consume API
    const onSubmit =(data)=>{
        setPerson(data);
        // fetch("http://localhost:9067/person/register",{
        //     method:"POST",
        //     headers:{"Content-Type":"application/json"},
        //     body:JSON.stringify(person)
        // })
        handleShow();
        alert('You have been successfully registered.') ;

    }




    return (
        <div>
        <Navbar/>
        <div className='main'>
            <div className='signup-container'>
                <h3>Create Account</h3>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Box className='reg' component="form"
                         sx={{
                             '& > :not(style)': { m: 1, width: '25rem' },
                         }}
                         noValidate
                         autoComplete="off"
                    >
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">First Name</InputLabel>
                            <FilledInput name="firstName"
                                         color="success" {...register("firstName", { required: true, maxLength: 20 })} aria-describedby="component-error-text"/>
                            <FormHelperText id="component-error-text"><span>{errors.firstName &&"First Name is Required"}</span></FormHelperText>
                        </FormControl>


                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Last Name</InputLabel>
                            <FilledInput name='lastName'  variant="filled" color="success" {...register('lastName', { required: true })} aria-describedby="component-error-text"/>
                            <FormHelperText id="component-error-text"><span>{ errors.lastName &&"Last Name is Required"}</span></FormHelperText>
                        </FormControl>


                    </Box>
                    <Box className='reg' component="form"
                         sx={{
                             '& > :not(style)': { m: 1, width: '25rem' },
                         }}
                         noValidate
                         autoComplete="off"
                    >

                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Username</InputLabel>
                            <FilledInput name='userName' variant="filled" color="success" {...register('userName', { required: "User Name is Required" })} aria-describedby="component-error-text"/>
                            <FormHelperText id="component-error-text"><span>{ errors.userName &&"Username is Required"}</span></FormHelperText>

                        </FormControl>

                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <FilledInput name='values' color="success" required id="filled-adornment-password" type={values.showPassword ? 'text' : 'password' } {...register('password', { required: "Password is Required", minLength: {value: 8} })}

                                         endAdornment={
                                             <InputAdornment position="end">
                                                 <IconButton aria-label="toggle password visibility"
                                                             onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                                                     {values.showPassword ?  <Visibility /> : <VisibilityOff /> }
                                                 </IconButton>
                                             </InputAdornment>
                                         } aria-describedby="component-error-text"/>
                            <FormHelperText id="component-error-text"><span>{ errors.password &&"Password cannot be less than 8"}</span></FormHelperText>

                        </FormControl>

                    </Box>
                    <Box className='reg' component="form"
                         sx={{
                             '& > :not(style)': { m: 1, width: '25rem' },
                         }}
                         noValidate
                         autoComplete="off"
                    >

                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
                            <FilledInput name='email'  type="email" variant="filled" color="success" {...register('email',
                                { required: true, pattern:{value:/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/} })} aria-describedby="component-error-text"/>
                            <FormHelperText id="component-error-text"><span>{ errors.email &&"Email is Empty or This is not a valid Email"}</span></FormHelperText>

                        </FormControl>

                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Phone Number</InputLabel>
                            <FilledInput name='phoneNumber'  type="number" variant="filled" color="success" {...register('phoneNumber', { required: "Phone Number is Required", pattern:{value:/^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{9}$/} })} aria-describedby="component-error-text"/>
                            <FormHelperText id="component-error-text"><span>{ errors.phoneNumber &&"Phone Number is Empty or not valid"}</span></FormHelperText>

                        </FormControl>
                    </Box>
                    <div className="fromgender">
                        <div className='reg' aria-describedby="component-error-text">
                            <label className='gender' id="demo-row-radio-buttons-group-label"><strong>Gender:</strong></label>
                            <input name='gender' value="Male" type="radio" {...register('gender', { required: "Gender is Required" })} />  <label  className='gender'>Male </label>
                            <input  name='gender' value="Female"  type="radio" {...register('gender', { required: "Gender is Required" })}/>  <label  className='gender'>Female </label>
                            <input  name='gender'  value="Others" type="radio" {...register('gender', { required: "Gender is Required" })}/>  <label  className='gender'>Other</label>
                            <FormHelperText id="component-error-text"><span>{ errors.gender &&"Gender is Required"}</span></FormHelperText>
                        </div>
                        <Box className='reg' component="form"
                             sx={{
                                 '& > :not(style)': { m: 1, width: '25rem' },
                             }}
                             noValidate
                             autoComplete="off"
                        >

                            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                                <h6 htmlFor="outlined-adornment-password">Date of Birth</h6>
                                <FilledInput name='dateOfBirth' type="date" variant="filled" color="success" {...register('dateOfBirth', { required: "Date of Birth is Required" })} aria-describedby="component-error-text"/>
                                <FormHelperText id="component-error-text"><span>{ errors.dateOfBirth &&"Date Of Birth is Empty or invalid Date of Birth"}</span></FormHelperText>

                            </FormControl>
                        </Box>


                        <Button className='bttn' type='submit'>Create Account</Button>
                    </div>
                </Form>
                <hr/>
                <div className="fromgender">
                    <h6>Already have an account?</h6>
                    <a href="#" className='btn-sm buttn'>LOGIN</a>
                </div>
            </div>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="address">
                        Create Address
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CreateAddress userName={person.userName}/>
                </Modal.Body>
            </Modal>
        </div>
        <Footer/>
    </div>
    )
}

export default Signup