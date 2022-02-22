import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button} from 'react-bootstrap';
import { useForm} from 'react-hook-form';
import Box from '@mui/material/Box';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';

import '../SignUp/signUp.css';

const CreateAddress = ({userName, close}) => {

    const { register, formState: { errors }, handleSubmit } = useForm()
    const[address, setAddress] = useState()

    const onSubmit =(data)=>{
        setAddress(data);
        fetch("http://localhost:9067/address/addAddress", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(address)
        }).then(()=>{
            console.log("Address added")
        })
        alert('Verify Your account through your email.')
    }


    return (
            <div>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <h4 className="user">{userName}</h4>
                    <input className="username" name='userName' value={userName}  {...register('userName')}/>
                    <Box className='reg' component="form"
                         sx={{
                             '& > :not(style)': { m: 1, width: '25rem' },
                         }}
                         noValidate
                         autoComplete="off"
                    >
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-streetDetail">Street Details</InputLabel>
                            <FilledInput name='streetDetail' variant="filled" color="success" {...register('streetDetail', { required: true})} aria-describedby="component-error-text"/>
                            <FormHelperText id="component-error-text"><span>{ errors.phoneNumber &&"Street Details is Required"}</span></FormHelperText>

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
                            <InputLabel htmlFor="outlined-adornment-state">State</InputLabel>
                            <FilledInput name='state'  variant="filled" color="success" {...register('state', { required: "State is Required" })} aria-describedby="component-error-text"/>
                            <FormHelperText id="component-error-text"><span>{ errors.state &&"State is Required"}</span></FormHelperText>

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
                            <InputLabel htmlFor="outlined-adornment-city">City</InputLabel>
                            <FilledInput name='city'  variant="filled" color="success"  {...register('city', { required: "City is Required" })} aria-describedby="component-error-text"/>
                            <FormHelperText id="component-error-text"><span>{ errors.city &&"City is Required"}</span></FormHelperText>

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
                            <InputLabel htmlFor="outlined-adornment-zipCode">Zip Code</InputLabel>
                            <FilledInput name='zipCode'  variant="filled" color="success"  {...register('zipCode', { required: "Zip Code is Required" })} aria-describedby="component-error-text"/>
                            <FormHelperText id="component-error-text"><span>{ errors.zipCode &&"zipCode is Required"}</span></FormHelperText>

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
                            <InputLabel htmlFor="outlined-adornment-country">Country</InputLabel>
                            <FilledInput name='country'  variant="filled" color="success"  {...register('country', { required: "Country is Required" })} aria-describedby="component-error-text"/>
                            <FormHelperText id="component-error-text"><span>{ errors.country &&"Country is Required"}</span></FormHelperText>

                        </FormControl>

                    </Box>
                    <Button className='bttn' type='submit' onClick={close}>Add Address</Button>
                </Form>

            </div>
    )
}

export default CreateAddress