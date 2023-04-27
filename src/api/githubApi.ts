import axios from "axios";


//Çonfiguración de inicio del URL
export const githubApi = axios.create ({
    baseURL:'https://api.github.com/repos/facebook/react',
    headers: {}
})