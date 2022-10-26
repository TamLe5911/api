export interface INominee {
    id:string
    minPrice: IMinPrice;
    topProducts: IProduct[];
  };
  type IMinPrice = {
    currency: string;
    price: number;
    priceContent: string;
  };
  type IProduct = {
    serviceId: number;
    serviceName: string;
    priceContent: string;
    price: number;
    currency: string;
    image:string;
  };
 