import { reactive } from "vue";

export const store = reactive({
  caterers: [],
  cartData: [],
  storeData: [],
  error: "",
  apiBaseUrl: "http://127.0.0.1:8000/api",
});
