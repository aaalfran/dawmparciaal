export const USER_HAS_LOGGED_IN = "USER_HAS_LOGGED_IN";
export const userHasLoggedIn = (islogin) => ({
  type: USER_HAS_LOGGED_IN,
  payload: islogin,
});

export const CATEGORY_FILTER_SELECTED = "CATEGORY_FILTER_SELECTED";
export const categoryFilterSelected = (filter) => ({
  type: CATEGORY_FILTER_SELECTED,
  payload: filter,
});

export const SORTER_FILTER_SELECTED = "SORTER_FILTER_SELECTED";
export const sorterFilterSelected = (filter) => ({
  type: SORTER_FILTER_SELECTED,
  payload: filter,
});

export const CATEGORY_FILTER_UNSELECTED = "CATEGORY_FILTER_UNSELECTED";
export const categoryFilterUnselected = (filter) => ({
  type: CATEGORY_FILTER_UNSELECTED,
  payload: filter,
});

export const SORTER_FILTER_UNSELECTED = "SORTER_FILTER_UNSELECTED";
export const sorterFilterUnselected = (filter) => ({
  type: SORTER_FILTER_UNSELECTED,
  payload: filter,
});
