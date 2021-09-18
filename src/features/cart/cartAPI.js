import axios from "axios";


export const  fetchData = async() => {
    const object =  localStorage.getItem('user')
	const userInfo = JSON.parse(object);
	const userId = userInfo.userID
    
    const {data} = await axios.get(`https://vinhshop.herokuapp.com/api/cart/user=${userId}`)
    return data


  }