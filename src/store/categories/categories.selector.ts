import { CategoriesState } from './categories.reducer';
import { Category, CategoriesMap } from './categories.types';
import { createSelector } from 'reselect';
import { RootState } from '../store';

const selectCategoriesReducer = (state: RootState): CategoriesState =>
  state.categories;

const selectCategories = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice): Category[] => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, { title, items }) => {
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoriesMap)
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
