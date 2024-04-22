
import axios from "axios";

const USERS_REST_API_URL ='tartanyan-alb-1646139257.ap-south-1.elb.amazonaws.com/users';

class UserService {
    getUsers() {
        return axios.get(USERS_REST_API_URL);
    }

    postUsers(userData) {
        return axios.post(USERS_REST_API_URL, userData);
    }
}

export default new UserService();
