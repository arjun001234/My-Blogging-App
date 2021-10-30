import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react'
import PostContainer from '../../components/post/container';
import { AppContext } from '../../context/contextApi';
import { AllPostsProps } from '../../types/types';
import { getAllPosts } from '../../utils/posts-utils';

const AllPosts : React.FC<AllPostsProps> = ({data}) => {

    const { handleCloseNavBar } = React.useContext(AppContext);

    React.useEffect(() => {
        handleCloseNavBar();
    },[])

    return (
        <>
            <Head>
                <title>Arjun All Blog Posts </title>
                <meta name='Description' content='Web Dev Blogs'/>
            </Head>
            <PostContainer data={data} />
        </>
    )
}

export const getStaticProps : GetStaticProps = async () => {

    const data = getAllPosts();

    return {
        props: {
            data: data
        }
    }
};

export default AllPosts;
