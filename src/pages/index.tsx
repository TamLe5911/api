
import React, { useEffect, useState } from "react";
import { Main } from "../layout/Main";
import { Meta } from "../layout/Meta";
import { AppConfig } from "../utils/AppConfig";
import {IInfos} from "../../model/modelHome"
import { getCompany } from "../api/getCompany/getCompany";
import { GetServerSideProps } from "next";
import NextLink from "next/link";
import Router from "next/router";


const Index = ({companys}: any) => {
  const [infos, setInfos] = useState(companys as IInfos);
  useEffect(() => {
    setInfos((companys?.data || []) as IInfos);
  }, []);
  return (
    <Main
      meta={
        <Meta title={AppConfig.title} description={AppConfig.description} />
      }
    >
  
  <div className="tb-infomation margin-negative-5rem">
      <div>
        <h1>Đây là MinPrice</h1>

        {Object.keys((infos && infos.minPrice) || {}).map((value, id) => {
            return <p key={id}>{infos.minPrice[value]}</p>;
          })}
     
      </div>
      <NextLink href="/nominees" passHref>
          <div >Company__</div>
        </NextLink>
      {Array.from(infos.topProducts || []).map((item) => {
        return (
          <div key={item.areaId} >
            <h2>{item.title}</h2>
            <img src={item.image} alt="" />
            <img src={item.imageFill} alt="" />
            {Array.from(item.countries || []).map((country, index) => (
              <div key={index}>
                <div onClick={()=>Router.push(`/nominees`)}>
              <p>{country.name}</p>
              <img src={country.imageJuris} alt="" />
                  </div>
              </div>
            ))}
          </div>
        );
      })}
    </div>
    </Main>
  );
};

export const getServerSideProps:GetServerSideProps = async (
) => {
  const companys = await getCompany();
  return {
    props: {
      companys,
    },
  };
};
export default Index;
