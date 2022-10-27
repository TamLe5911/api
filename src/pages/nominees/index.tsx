
import React, { useEffect, useState } from "react";
import NextLink from "next/link";
import {IInfos} from "../../../model/modelHome"
import Router from "next/router";
import {  GetStaticProps } from 'next';

import { getNominee } from '../../api/getNominee/getNominee';
import Link from "next/link";

function Company({nominees}: any) {
  const [infos, setInfos] = useState(nominees as IInfos);
  useEffect(() => {
    setInfos((nominees?.data || []) as IInfos);
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
      
      {Array.from(infos.topProducts || []).map((item) => {
        return (
          <div key={item.areaId} >
            <h2>{item.title}</h2>
            <img src={item.image} alt="" />
            <img src={item.imageFill} alt="" />
            {Array.from(item.countries || []).map((country, index) => (
              <div key={index}>
                <div>
                  <p>{country.description}</p>
              <p>{country.name}</p>
              <Link href={`/nominees/${item.areaId}`}>
              <img src={country.imageJuris} alt="" />
              </Link>
                </div>
              </div>
            ))}
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