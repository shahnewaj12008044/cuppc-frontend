import axios from "axios";
import Config from "../../config";

const axiosInstance = axios.create({
    baseURL : Config.base_api
})

export default axiosInstance;