import axios from "axios";

export const jpApi = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    // headers: {
    //     Authorization: 'Bearer -09876567890-',
    //     "Content-Type": 'application/json'
    // }, // json-place-holder dont need header
    timeout: 5000,
    timeoutErrorMessage: 'زمان پاسخگویی بیش از 5 ثانیه طول کشید ...'
});