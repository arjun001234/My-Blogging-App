import Image from 'next/image';
import React from 'react';
import { postHeaderProps } from '../../../types/types';
import classes from '../post.module.scss';

const PostHeader : React.FC<postHeaderProps> = ({title,image}) => {
    return (
        <div className={classes.post_header}>
            <section>
                <p>{title}</p>
            </section>
            <Image src={image} width={300} height={300} layout='responsive' />
        </div>
    )
}

export default PostHeader;
