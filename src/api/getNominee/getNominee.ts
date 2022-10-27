import * as request from "../../utils/InfomationServices";
export const getNominee = async () => {
    const result = await request.getInfomations(`services/12/products`);
    return result ;
  };