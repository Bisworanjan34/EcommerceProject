import axios from "axios"
let electronicService=()=>{
    return axios.get('http://localhost:3000/categories_electronics')
}
export default electronicService
