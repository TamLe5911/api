
import React, { useEffect, useState } from "react";
import NextLink from "next/link";
import {INominee} from "../../../model/modelNominee"

import {  GetStaticProps } from 'next';

import { getNominee } from '../../api/getNominee/getNominee';

function Company({nominees}: any) {
  const [infos, setInfos] = useState(nominees as INominee);
  useEffect(() => {
    setInfos((nominees?.data || []) as INominee);
  }, []);
  return (
    
    <div>
      <NextLink href="/" passHref>
       
          <div >__index</div>
      
      </NextLink>
      <h1>Company</h1>
      <div className="tb-infomation margin-negative-5rem">
      <div>
        <h1>Đây là MinPrice</h1>

        {Object.keys((infos && infos.minPrice) || {}).map((value, id) => {
            return <p key={id}>{infos.minPrice[value]}</p>;
          })}
     
      </div>
      
      {Array.from(infos.topProducts || []).map((item, id) => {
        return (
          <div key={id}>
            <h2>{item.serviceName}</h2>
            <NextLink
              as={`/company/${id}`}
              href={`/company/[id]`}
              passHref
              key={`/company/${id}`}
            >
            <img src={item.image} alt="" />
            </NextLink>
            <p>{item.price}</p>
            <p>{item.priceContent}</p>
            <p>{item.currency}</p>
           
          </div>
        );
      })}
    </div>
      </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const nominees = await getNominee();
  return {
    props: { nominees }
  };
};
export default Company