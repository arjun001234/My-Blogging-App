import React from 'react'
import PostDetailContent from './postDetailContent'
import classes from '../post.module.scss';
import { PostDetailsProps } from '../../../types/types';

const PostDetails : React.FC<PostDetailsProps> = ({data}) => {

    if(!data){
        return <p>Loading...</p>
    }

    return (
        <div className={classes.post_details}>
            <PostDetailContent data={data} />
        </div>
    )
}

export default PostDetails;
