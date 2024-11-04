import axios from "axios";

const getdata=(setUser,setFilter)=>{
    axios.get('https://randomuser.me/api/?results=50')
    .then((res)=>{
        console.log(res.data.results)
        setUser(res.data.results)
        setFilter(res.data.results)
    })
    .catch((err)=>err)

}
export default getdata