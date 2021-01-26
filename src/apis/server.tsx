import axios from 'axios'; 

export const clientURL = 'http://localhost:3000'

export default axios.create({
    baseURL: 'https://www.bitda.ml'
}); 

// 'http://localhost:8080'