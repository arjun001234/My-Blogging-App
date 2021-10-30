import React from 'react'
import PostHeader from './postHeader';
import classes from '../post.module.scss';
import ReactMarkdown from 'react-markdown';
import { PostDetailsContentProps } from '../../../types/types';
import { Components } from 'react-markdown/src/ast-to-react';
import Image from 'next/image';
import { PrismLight as SyntaxHighLighter } from 'react-syntax-highlighter';
import atomDark  from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import ts from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';

SyntaxHighLighter.registerLanguage('js',js);
SyntaxHighLighter.registerLanguage('ts',ts);
SyntaxHighLighter.registerLanguage('css',css);


const PostDetailContent : React.FC<PostDetailsContentProps> = ({data}) => {

    const { title,content } = data;

    const customRenderer : Components = {
        p(p){
            const {node} = p;
            if(node.children[0].tagName as string === 'img'){
                const imageElm = node.children[0].properties as {src: string,alt: string};
                return(
                    <div className={classes.In_Blog_image}>
                        <Image src={imageElm.src} width={400} height={500}  />
                    </div>
                )
            }
            return <p>{p.children}</p>
        },
        code(code){
            return (
                <SyntaxHighLighter language='javascript' style={atomDark} >
                    {code.children}
                </SyntaxHighLighter>
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
