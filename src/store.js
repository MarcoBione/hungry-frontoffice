import { reactive } from "vue";

export const store = reactive({
    caterers : [],
    error : '',
    apiBaseUrl: 'http://127.0.0.1:8000/api',
    selectedCat: 0,
    catererName: ''
});
