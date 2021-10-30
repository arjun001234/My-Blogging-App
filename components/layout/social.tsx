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
                <a target="_blank" href="https://www.facebook.com/arjun.kanojia.7906">
                <FacebookIcon className='icon' /></a>
                <a target="_blank" href="https://twitter.com/ARJUN70951256">
                <TwitterIcon className='icon' /></a>
                <a target="_blank" href="https://github.com/arjun001234">
                <GitHubIcon className='icon' /></a>
            </section>
        </div>
    )
}

export default Social;