import React from 'react'
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { getNominee } from '../../api/getNominee/getNominee';
import { ParsedUrlQuery } from 'querystring';
import * as request from "../../utils/InfomationServices";
import axios from 'axios';
import * as jose from "jose";

function NomineeId({claims}: any) {
  console.log(claims)
  return (
    <div>asdasda</div>
    
  )
}

// interface Params extends ParsedUrlQuery {
//   id: string;
// }
// export const getStaticProps: GetStaticProps = async (context) => {
//   const { id } = context.params!;
//   const res = await axios.post(
//     `https://apitest.oneibc.com/frontend/v3/services/2/products/${id}`,
//   );
//   const data = res.data;
//   console.log(data);
//   const claims = jose.decodeJwt(data);
//   console.log(claims);
//   return {
//     props: {
//       claims,
//     },
//   };
// };
// export const getStaticPaths: GetStaticPaths = async () => {
//   const paths = Array.from({ length: 10 }, (_, index) => ({
//     params: {
//       pid: (index + 1).toString(),
//     },
//   }));
//   return {
//     paths,
//     fallback: false,
//   };
// };
export default NomineeId