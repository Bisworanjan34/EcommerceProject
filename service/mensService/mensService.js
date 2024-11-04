import axios from "axios"
let mensService=()=>{
    return axios.get('http://localhost:3000/categories_mensclothing')
}
export default mensService