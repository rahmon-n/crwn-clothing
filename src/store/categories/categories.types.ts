export enum CATEGORIES_ACTION_TYPES {
  FETCH_CATEGORIES_START = 'FETCH_CATEGORIES_START',
  FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS',
  FETCH_CATEGORIES_FAILED = 'FETCH_CATEGORIES_FAILED'
}

export type CategoryItem = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};

export type Category = {
  title: string;
  items: CategoryItem[];
};

export type CategoriesMap = {
  [key: string]: CategoryItem[];
};
