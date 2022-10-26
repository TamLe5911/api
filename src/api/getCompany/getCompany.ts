import * as request from "../../utils/InfomationServices";
export const getCompany = async () => {
    const result = await request.getInfomations(`services/1/products`);
    return result ;
  };