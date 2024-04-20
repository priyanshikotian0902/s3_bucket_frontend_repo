
import axios from "axios";

const USERS_REST_API_URL ='http://3.110.107.111:8089/users';

class UserService {
    getUsers() {
        return axios.get(USERS_REST_API_URL);
    }

    postUsers(userData) {
        return axios.post(USERS_REST_API_URL, userData);
    }
}

export default new UserService();
