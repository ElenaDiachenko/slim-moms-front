const handleAnyFulfield = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
};

const handleAnyPending = state => {
  state.isLoading = true;
};

const handleAnyRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const anyCases = {
  handleAnyPending,
  handleAnyFulfield,
  handleAnyRejected,
};
