import React from 'react';
import { NotificationProps } from '../../types/types';
import classes from './notification.module.scss';

import {} from 'react-dom'

const Notification : React.FC<NotificationProps> = ({message,status}) => {

    const[color,setColor] = React.useState('');

    React.useEffect(() => {
        if(status === 'Error'){
            setColor('red');
        }
        if(status === 'Pending'){
            setColor('blue');
        }
        if(status === 'Success'){
            setColor('green');
        }
    },[status])
    return (
        <div className={classes.container} style={{backgroundColor: color,bottom: status ? '0px' : '-100px'}}>
            <p>{status}!</p>
            <p>{message}</p>
        </div>
    )
}

export default Notification;