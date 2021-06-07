import fs from 'fs';
import React from 'react'
import PostDetails from '../../components/post/post-details/postDetails';
import { useRouter } from 'next/router';
import { getPost,postDirectory } from '../../utils/posts-utils';
import { GetStaticPaths, GetStaticProps } from 'next';
import { SinglePostProps, staticPathsType } from '../../types/types';
import { AppContext } from '../../context/contextApi';
import Head from 'next/head';

const SinglePost : React.FC<SinglePostProps> = ({data}) => {

    const{ handleCloseNavBar } = React.useContext(AppContext)

    React.useEffect(() => {
        handleCloseNavBar();
    },[])

    return (
        <div className='single-post-page'>
            <Head>
                <title>{data.slug}</title>
                <meta name='Description' content={data.title}/>
            </Head>
            <PostDetails data={data} />
        </div>
    )
}

export const getStaticProps : GetStaticProps = async (context) => {

    const filename = context.params.slug[0];

    const data = getPost(filename+'.md');

    return {
        props: {
            data: data
        }
    }
}

export const getStaticPaths : GetStaticPaths = async () => {

    const posts = fs.readdirSync(postDirectory);

    const getPaths : staticPathsType[] = [];

    for(const item in posts){
        const path = posts[item].replace(/\.md$/,'');
        getPaths.push({
            params: {
                slug: [path]
            }
        })
    }

    return {
        paths: getPaths,
        fallback: true
    }
}

export default SinglePost;
