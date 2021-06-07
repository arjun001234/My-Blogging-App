import React from 'react';
import { LayoutProps } from '../../types/types';
import Header from '../ui/header';
import SideBar from './sidebar';
import Social from './social';

const Layout : React.FC<LayoutProps> = ({children}) => {

    return (
        <div id='layout'>
            <SideBar />
            <section className='layout-section'>
                <Header title={'Arjun Blogs'} />
                {children}
            </section>
            <Social />
        </div>
    )
}

export default Layout;
