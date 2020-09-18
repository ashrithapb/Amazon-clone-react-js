import axios from "axios";

const instance = axios.create({
    //baseURL: 'http://localhost:5001/clone-challenge-7025c/us-central1/api',// the API (cloud function) URL
    baseURL: 'https://us-central1-clone-challenge-7025c.cloudfunctions.net/api',
});
export default instance;