import { GetServerSideProps } from "next";
import React from "react";
import { Main } from "../layout/Main";
import { Meta } from "../layout/Meta";
import { AppConfig } from "../utils/AppConfig";
import { fetchCompany } from "../utils/fetchCompany";

type IInfos = {
  minPrice:IMinPrice[];
  topProducts: IProduct[];
};
type IMinPrice = {
  currency: string;
  price: number;
  priceContent: string;
};
type IProduct = {
  areaId: number;
  image: string;
  imageFill: string;
  title: string;
  countries: ICountry[];
};
type ICountry = {
  areaId: number;
  code: string;
  countryId: number;
  currency: string;
  description: string;
  flagCountry: string;
  image: string;
  imageJuris: string;
  itemBrand: string;
  itemCategory: string;
  itemCategory2: string;
  itemId: string;
  itemVariant: number;
  name: string;
  orService: string;
  pageId: number;
  price: number;
  priceContent: string;
};


const Index = (companys:IInfos) => {
console.log(companys.topProducts)

  return (
    <Main
      meta={
        <Meta title={AppConfig.title} description={AppConfig.description} />
      }
    >
  
      {companys.minPrice}
    </Main>
  );
};
export const getServerSideProps: GetServerSideProps = async (
) => {
  const companys = await fetchCompany();
  return {
    props: {
      companys,
    },
  };
};
export default Index;
