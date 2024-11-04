import axios from "axios"
let productsSrvice=()=>{
    return axios.get('http://localhost:3000/products')
}
export default productsSrvice