import * as request from "../../utils/InfomationServices";
export const getNomineeId = async () => {
    const result = await request.getInfomations(`services?id=2&keyword=NomineeFeatures`);
    return result ;
  };