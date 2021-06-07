import React from 'react';
import ViewListIcon from '@material-ui/icons/ViewList';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import CloseIcon from '@material-ui/icons/Close';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import { SideBarProps } from '../../types/types';
import {AppContext} from '../../context/contextApi';
import Link from 'next/link';

const SideBar : React.FC<SideBarProps> = () => {

    const{ showNavBar,handleCloseNavBar } = React.useContext(AppContext)

    return (
        <div id="sidebar" style={{transform: !showNavBar && 'rotateZ(90deg)'}} >
            <section className='user-modal'>
                <CloseIcon onClick={handleCloseNavBar} className='icon' />
            </section>
            <ul>
                <Link href='/'>
                <li>
                    <LibraryBooksIcon />
                    <p>Home</p>
                </li>
                </Link>
                <Link href='/posts'>
                <li>
                    <ViewListIcon />
                    <p>All Posts</p>
                </li>
                </Link>
                <Link href='/contact'>
                <li>
                    <ContactMailIcon />
                    <p>Contact</p>
                </li>
                </Link>
            </ul>
        </div>
    )
}

export default SideBar
