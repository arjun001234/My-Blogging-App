import React from 'react'
import PostHeader from './postHeader';
import classes from '../post.module.scss';
import ReactMarkdown from 'react-markdown';
import { PostDetailsContentProps } from '../../../types/types';
import { Components } from 'react-markdown/src/ast-to-react';
import Image from 'next/image';
import { Prism } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const PostDetailContent : React.FC<PostDetailsContentProps> = ({data}) => {

    const { title,content } = data;

    const customRenderer : Components = {
        p(p){
            const {node} = p;
            if(node.children[0].tagName as string === 'img'){
                const imageElm = node.children[0].properties as {src: string,alt: string};
                return(
                    <div className={classes.In_Blog_image}>
                        <Image src={imageElm.src} width={1000} height={1000} layout='responsive' />
                    </div>
                )
            }
            return <p>{p.children}</p>
        },
        code(code){
            return (
                <Prism language='javascript' style={atomDark} >
                    {code.children}
                </Prism>
            );
        }
    }

    return (
        <div className={classes.post_details_content}>
            <PostHeader title={title} image={`${data.image}/next-image.png`} />
            <article></article>
            <ReactMarkdown components={customRenderer} >{content}</ReactMarkdown>
        </div>
    )
}

export default PostDetailContent;
