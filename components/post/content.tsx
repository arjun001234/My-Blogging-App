import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { PostContentProps } from '../../types/types';
import classes from './post.module.scss';

const PostContent : React.FC<PostContentProps> = ({data}) => {

    const singlePostPath = `/posts/${data.slug}`;

    return (
        <Link href={singlePostPath}> 
        <a>
        <div className={classes.post_content}>
            <Image width={400} height={400} src={`${data.image}/next-image.png`} />
            <main className={classes.post_main}>
                <p>{data.desc}</p>
                <p>{data.date}</p>
            </main>
        </div>
        </a>
        </Link>
    )
}

export default PostContent;
