import React from 'react';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import { AppContext } from '../../context/contextApi';
import { headerProps } from '../../types/types';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const Header : React.FC<headerProps> = ({title}) => {

    const { handleOpenNavBar,handleShowDetails } = React.useContext(AppContext);

    return (
        <div id='header'>
            <ClearAllIcon onClick={handleOpenNavBar}  className='icon2' />
            <p>{title}</p>
            <MoreVertIcon className='icon2' onClick={handleShowDetails} />
        </div>
    )
}

export default Header;
