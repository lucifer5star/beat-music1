import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useRef, useState } from 'react';
import { API_CLIENT } from '../shared/api_client';
export const User = ()=>{
    const [msg,setMsg] =useState('');
    const userid = useRef('');
    const pwd = useRef('');
    const emailID = useRef('');
    const contactnum = useRef('');
    const doRegister=async()=>{

    }
    const doLogin = async ()=>{
        const uid = userid.current.value;
        const password= pwd.current.value;
        const eid=emailID.current.value;
        const cnum=contactnum.current.value;
        const userObject = {'userid':uid, 'password':password,'emailID':eid,'contactnum':cnum};
        console.log('UserObject is ', userObject);
        try{
        const result = await API_CLIENT.post(process.env.REACT_APP_LOGIN_URL, userObject);    
        setMsg(result.data.message);    
    }
        catch(err){
            console.log('Error in Login Call ', err);
        }
    }
    return (
        <>
     <Container maxWidth="sm">
        <h1>Login</h1>
        <h4>{msg}</h4>
     <Box sx={{  height: '100vh' }} >
     <div><TextField inputRef = {userid} id="outlined-basic" label="Userid" variant="outlined" />
     <TextField inputRef = {pwd} id="outlined-basic" type="password" label="Password" variant="outlined" /><br/></div> 
    <Button onClick = {doLogin} variant="contained">Login</Button>
        
     <div>
        <br/>
     <h1>Register</h1>
     <TextField inputRef = {userid} id="outlined-basic" label="Userid" variant="outlined" />
     <TextField inputRef = {pwd} id="outlined-basic" type="password" label="Password" variant="outlined" />
     <TextField inputRef = {emailID} id="outlined-basic" type="email" label="email" variant="outlined" />
     <TextField inputRef = {contactnum} id="outlined-basic" type="number" label="number" variant="outlined" /></div>
     <Button onClick={doRegister} variant="contained">Register</Button>
     
     <br/> 
     </Box>
     </Container>
     </>
    );
    }