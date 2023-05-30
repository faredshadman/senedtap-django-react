export interface IStatistic {
  id?: number;
  title: string;
  count: number;
}
export interface ICategory {
  id?: string | number;
  name: string;
  body: string | null;
}
export interface IApiError {
  message: string;
  description: string;
  statusCode: string | number;
}
interface ListItem {
  id: number;
  title: string;
}
export type IActive = "Biz kimik?" | "Tariximiz" | "Vizyonumuz";

export interface IContent {
  content: {
    title: string;
    content: string;
    lists: ListItem[];
  };
  active: IActive;
}
export interface IReview {
  id: number | string;
  body: string;
  image_url: string;
  job: string;
  name: string;
  stars: number;
}

export interface IQuestion {
  question: number;
  handleQuestion: (id: number) => void;
  item: {
    id: number;
    question: string;
    answer: string;
  };
  lastIndex: number;
}

export interface IDoc {
  id: number | string;
  title: string;
  body: string;
  price: number;
  language: string;
  fav: boolean;
  category: ICategory;
}

export interface MenuAtom {
  title: string;
  children?: MenuAtom[];
}
