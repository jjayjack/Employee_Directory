import axios from "axios";

export default{
    getRandomUsers: function(){
        return axios.get("https://randomuser.me/api/?format=JSON/?results=50");
    }
}

        