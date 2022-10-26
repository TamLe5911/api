import * as request from "../../utils/InfomationServices";
export const getNominee = async () => {
    const result = await request.getInfomations(`services/2/products`);
    return result ;
  };