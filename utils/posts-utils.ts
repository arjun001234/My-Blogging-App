import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileResType, postDataType } from '../types/types';

export const postDirectory = path.resolve(process.cwd(),'posts');

export const getPost = (filename: string) : postDataType => {
    const filePath = path.resolve(postDirectory,filename);
    const post = fs.readFileSync(filePath,'utf-8');
    const {data,content} = matter(post);
    const pathArray = filename.split('\\');
    const slug = pathArray[pathArray.length - 1].replace(/\.md$/,'');
    const postData : postDataType = {
        slug,
        ...data as fileResType,
        content
    }
    return postData;
}

export const getAllPosts = () : postDataType[] => {
    const myPosts = fs.readdirSync(postDirectory);
    const allPosts: postDataType[] = [];
    for(const item in myPosts){
        allPosts.push(getPost(myPosts[item]));
    }
    return allPosts;
}

export const getFeaturedPosts = () : postDataType[]  => {
    return getAllPosts().filter((post) => post.isFeatured === true);
}