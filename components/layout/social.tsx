import React from 'react'
import { AppContext } from '../../context/contextApi';
import CloseIcon from '@material-ui/icons/Close';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

const Social : React.FC = () => {

    const { handleHideDetails,showDetails } = React.useContext(AppContext);

    return (
        <div className="social-container"  style={{transform: !showDetails && 'rotateZ(-90deg)'}}>
            <section className='social-content'>
                <CloseIcon className='icon' onClick={handleHideDetails} />
                <FacebookIcon className='icon' />
                <TwitterIcon className='icon' />
                <GitHubIcon className='icon' />
            </section>
        </div>
    )
}

export default Social;