const selectProductsByQuery = state =>
  state.products.productsByQuery.queryProducts;
const selectIsLoadingProductsByQuery = state => state.products.isLoading;
const selectDataDiet = state => state.products.dataDiet;

export const productSelectors = {
  selectProductsByQuery,
  selectIsLoadingProductsByQuery,
  selectDataDiet,
};
