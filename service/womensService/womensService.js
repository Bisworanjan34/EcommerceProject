import axios from "axios"
let womensService=()=>{
    return axios.get('http://localhost:3000/categories_womensclothing')
}
export default womensService
