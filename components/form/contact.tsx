import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { ContactRequestData, FormInput, ReqStatusType } from '../../types/types';
import axios from 'axios';
import Notification from '../notification/notification';

const Contact : React.FC = () => {

    const[nameError,setNameError] = React.useState('');
    const[emailError,setEmailError] = React.useState('');
    const[status,setStatus] = React.useState<ReqStatusType | null>();
    const[message,setMessage] = React.useState('');

    React.useEffect(() => {
        const timer = setTimeout(() => {
            handleState(null,'');
        },3000)
        return () => clearTimeout(timer);
    },[status])

    const handleState = (type: ReqStatusType,value: string) => {
        setStatus(type);
        setMessage(value);
    }

    const validate = (data: ContactRequestData) : boolean => {
        setNameError('');
        setEmailError('');
        let isValid : boolean = true;
        if(data.name.length < 5){
            isValid = false
            setNameError('Name too short.')
        }
        if(!data.email.includes('@')){
            isValid = false
            setEmailError('Invalid email.')
        }
        return isValid;
    }

    const sendData = async (data: ContactRequestData) => {
        const url = '/api/contact';
        handleState('Pending','Sending')
        try {
            const result = await axios.post(url,data);
            console.log(result);
            if(result.status !== 201){
                handleState('Error',result.data.message);
            }else{
                handleState('Success',result.data.message);
            }
        } catch (error) {
            handleState('Error',error.message);
        }
    }

    return (
        <form className='contact-form' onSubmit={(e) => {
            e.preventDefault();
            const target = e.target as typeof e.target & FormInput;
            const enteredData : ContactRequestData = {
                name: target.name.value,
                email: target.email.value,
                comment: target.comment.value
            }
            if(validate(enteredData)){
                sendData(enteredData);
            }
        }}>
            <p className='heading'>Contact Me</p>
            <section>
            <TextField  name='name' error={nameError ? true : false} fullWidth required variant='outlined' label='Name' />
            <p className='error'>{nameError}</p>
            </section>
            <section>
            <TextField  error={emailError ? true : false} name='email' fullWidth required variant='outlined' label='Email' />
            <p className='error'>{emailError}</p>
            </section>
            <TextField  name='comment' multiline fullWidth required variant='outlined' label='Comment' />
            <Button type='submit' variant="contained">Send</Button>
            <Notification message={message} status={status}  />
        </form>
    )
}

export default Contact 
