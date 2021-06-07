import Head from 'next/head'
import React from 'react'
import Contact from '../../components/form/contact'
import { AppContext } from '../../context/contextApi'

const ContactPage : React.FC = () => {

    const{ handleCloseNavBar } = React.useContext(AppContext)

    React.useEffect(() => {
        handleCloseNavBar();
    },[])

    return (
        <div className='contact-page'>
            <Head>
                <title>Contact Me</title>
                <meta name='Description' content='Ask me anything'/>
            </Head>
            <Contact />
        </div>
    )
}

export default ContactPage
