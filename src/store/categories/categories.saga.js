import {all, call, put, takeLatest} from 'redux-saga/effects'

import {fetchCategoriesFailed, fetchCategoriesSuccess} from "./categories.actions";

import {getCategoriesAndDocuments} from "../../utils/firebase/firebase.utils";

import {CATEGORIES_ACTION_TYPES} from "./categories.types";

export function* fetchCategoriesAsync  ()   {
  try {
    const categoriesArray = yield call(getCategoriesAndDocuments);
    yield put(fetchCategoriesSuccess(categoriesArray))
  } catch (error) {
    yield put(fetchCategoriesFailed(error));
  }
};

function* onFetchCategories() {
  yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync)
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)])
}