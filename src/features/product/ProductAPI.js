import axios from "axios";
const fetchdata = async()=>{
    const {data} = await axios.get('/api/products')
    
}
export default fetchdata