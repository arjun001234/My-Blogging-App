import {getFeaturedPosts} from '../utils/posts-utils';
import { GetStaticProps } from "next";
import React from "react";
import PostContainer from "../components/post/container";
import { HomePageProps } from '../types/types';
import Head from 'next/head';
import MyDetails from '../components/user/details';
import { AppContext } from '../context/contextApi';

const Home : React.FC<HomePageProps> = ({data}) => {

  const { handleCloseNavBar } = React.useContext(AppContext);

  React.useEffect(() => {
      handleCloseNavBar();
  },[])

  return (
    <>
      <MyDetails />
      <PostContainer data={data} />
    </>
  )
}

export const getStaticProps : GetStaticProps = async () => {

  const data = getFeaturedPosts();

  return {
    props: {
      data: data
    }
  }
}

export default Home;