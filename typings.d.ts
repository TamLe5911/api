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
  