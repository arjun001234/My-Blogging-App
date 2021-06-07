import React from 'react'
import { PostContainerProps } from '../../types/types';
import PostContent from './content';
import classes from './post.module.scss';

const PostContainer : React.FC<PostContainerProps> = ({data}) => {

    return (
        <div className={classes.post_container}>
            {data.map((post) => {
                return <PostContent data={post} key={post.slug}/>
            })}
        </div>
    )
}

export default PostContainer;
