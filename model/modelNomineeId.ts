export interface INomineeId {
    pageId:number;
    pageKeyword:string;
    minPrice: IMinPrice;
    topProducts: IProduct[];
  };
  type IMinPrice = {
    sectionId: number;
    sectionKeyword: string;
    sectionContent: IProduct[];
  };
  type IProduct = {
    componentId: number;
    componentKeyword: string;
    componentType: string;
    componentOrder: number;
    componentContent: string;
  };
 