import mutations from "./mutations";
const { TOGGLE_LOADER } = mutations;
const loaderStore = {
  state: {
    isShowLoader: false,
  },
  getters: {
    isShowLoader: ({ isShowLoader }) => isShowLoader,
  },
};
