import Image from 'next/image'
import React from 'react';

const MyDetails : React.FC = () => {

    return (
        <div className="my-details">
            <section className='avatar'>
                <Image src='/images/7714.jpg' width={50} height={50} layout="responsive"/>
            </section>
            <section className='desc'>
                <p>Hey there, I am Arjun</p>
                <p>I write Blogs on emerging Web Technologies</p>
            </section>
            <main>
                <div>
                    <Image className="skills-icons" src="/images/skills/icons8-apollo-48.png" width={150} height={150} layout='responsive' />
                    <p>Apollo Client</p>
                </div>
                <div>
                    <Image src="/images/skills/icons8-graphql-48.png" width={150} height={150} layout='responsive' />
                    <p>Graphql</p>
                </div>
                <div>
                    <Image src="/images/skills/icons8-typescript-48.png" width={150} height={150} layout='responsive' />
                    <p>Typescript</p>
                </div>
                <div>
                    <Image src="/images/skills/icons8-mongodb-48.png" width={150} height={150} layout='responsive' />
                    <p>Mongo DB</p>
                </div>
                <div>
                    <Image src="/images/skills/icons8-mysql-logo-48.png" width={150} height={150} layout='responsive' />
                    <p>SQL</p>
                </div>
                <div>
                    <Image src="/images/skills/icons8-nodejs-48.png" width={150} height={150} layout='responsive' />
                    <p>Node</p>
                </div>
                <div>
                    <Image src="/images/skills/icons8-react-native-48.png" width={150} height={150} layout='responsive' />
                    <p>React</p>
                </div>
            </main>
        </div>
    )
}

export default MyDetails;
