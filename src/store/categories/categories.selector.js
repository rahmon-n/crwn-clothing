import { createSelector } from 'reselect';

const selectCategoriesReducer = state => state.categories;

const selectCategories = createSelector(
  [selectCategoriesReducer],
  categoriesSlice => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  categories =>
    categories.reduce((acc, { title, items }) => {
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoriesReducer],
  categoriesSlice => categoriesSlice.isLoading
);
