import axios from "axios"
let jweleryService=()=>{
    return axios.get('http://localhost:3000/categories_jewelery')
}
export default jweleryService