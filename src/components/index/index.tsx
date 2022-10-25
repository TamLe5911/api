import { Fragment, useCallback, useEffect, useState } from "react";
import * as request from "../../api/infomation/InfomationServices";
import { useRouter } from "next/router";

type IInfos = {
  minPrice:IMinPrice;
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

const TableInfoList = () => {
  const [data, setData] = useState({ hits: [] });
  const router = useRouter();
  const [infos, setInfos] = useState([] as IInfos[]);
  const [isLoading, setIsLoading] = useState(false);
  const getInfomations = async () => {
    setIsLoading(true);
    const result = await request.getInfomations(`services/1/products`, {
      params: {
        limit: 5,
      },
    });
    // console.log("dsbfgjkvbfg",result?.data)
    return (result?.data || []) as IInfos[];

  };

  useEffect(() => {
    getInfomations().then((result) => setInfos(result));
   
  },[]);
  console.log(infos);
  return (
    <div className='tb-infomation margin-negative-5rem'>
    <div id="info-list-tb" className='list-info-data'>
      {/* {
          Object.keys(infos).map((key, index) => {
            return(
              <div key={index}>
              <h2>
                {key}: {index.toString()}
              </h2>
  
              <hr />
            </div>
            )
           })
      } */}
       {/* {  
        Object.entries(infos).map(([categoryName, values]) => {
         return (
            <Fragment>
            <h3>{categoryName}</h3>
          
            <Fragment>
            { Object.entries(values).map(([item],value) => (
                <Fragment>
         
                    <p className='name'
                    >{item}:{value}:</p>
                   
                </Fragment>
            ))}
            </Fragment>
            </Fragment>
          )
        })
      } */}
  

    </div>
  </div>
  );
};

export { TableInfoList };