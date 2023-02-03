export interface ListInt {
  userId: number;
  id: number;
  title: string;
  introduce: string;
}
interface slelectDataInt {
  title: string;
  introduce: string;
  page: number;
  count: number;
  pagesize: number;
}
export class InitData {
  selectData: slelectDataInt = {
    title: "",
    introduce: "",
    page: 1,
    count: 0,
    pagesize: 5,
  };
  list: ListInt[] = [];
}
