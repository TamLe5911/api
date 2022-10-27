
import * as jose from "jose";
import axios from "axios";
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import {IInfos} from "../../../model/modelHome"
import React, { useEffect, useState } from "react";
import { ParsedUrlQuery } from 'querystring';
interface Params extends ParsedUrlQuery {
  id: string;
}



const StarWarsPerson: NextPage = ({post  }: any) => {
  // console.log(post.topProducts)
  const [infos, setInfos] = useState(post.topProducts);
  console.log(infos)
  useEffect(() => {
    setInfos((infos || []) as IInfos);
  }, []);
  return <div>
    <h1>asdasd</h1>
    <div >
                <div>
                  <p>{infos.description}</p>
                <p>{infos.name}</p>
                <img src={infos.imageJuris} alt="" />
                </div>
              </div>
  </div>;
};


export const getStaticPaths: GetStaticPaths = async () => {
  
  const paths = Array.from({ length: 10 }, (_, index) => ({
    params: {
      id: (index + 0).toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
 };


export async function getStaticProps({ params: {id}}: any) {
  // const { id } = params.query!;
    const jwt = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCIsImtpZCI6Ijc4NjIzZTc3LTVjNDItNDYxNS1hNjQwLTU4YTg4ZDBkMjA4MCJ9.eyJpYXQiOiIxNjYxNzY2OTg4IiwibGFuZ3VhZ2UiOiJlbiJ9.9EeE0b01OV3vEq_2UuOm6kFLNCdZPcUCzxdhk5PtPoKsjq9jUJIJWLJemVXDn26sfGvMHrUxpJLlh2zOLu45Uw";
    const req = await axios.post(`https://apitest.oneibc.com/frontend/v3/services/12/products `, jwt) 
    const data = req.data;
    const post = jose.decodeJwt(data)


    console.log(post)
  return {
    props: { post: post.data },
    revalidate: 1,
  }
}

export default StarWarsPerson


