import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import Items from '../shop/Items'
function Login() {

    const [userEmail, setUserEmail] = useState('vinhdang')
    const [userPassword, setUserPassword] = useState('123456')
    const getValueEmail = (e) => setUserEmail(e.target.value)
    const getValuePassword = (e) =>  setUserPassword(e.target.value)
    const [usersDb, setUsersDb] = useState([])
    useEffect(() => {
              const getInfo = async ()=>{
                  try {
                      const {data} = await axios.get('https://vinhshop.herokuapp.com/api/users')
                    //   console.log(data.name in data)
                    setUsersDb(data)
                  } catch (error) {
                      console.log(error)
                  }
              }  
              getInfo()
    }, [])
    const checkLogin = () =>{
        const check = usersDb.find((item) => item.name === userEmail)
        if(check) {
            if(check.password === userPassword) {
                console.log('login success')
                const userInfo = {'email' : userEmail,'password': userPassword,'userID': check._id}
                localStorage.setItem('user', JSON.stringify(userInfo) )
                
            }else console.log('password error')
        }
        else console.log('fail')
        
    }
    
    const handleClick = (e) => {
        e.preventDefault()
        checkLogin()
            if(localStorage.getItem('user'))  window.location=('/')
    }

    // const handCheck = (e) => {
    //     e.preventDefault()
    //     console.log(localStorage.removeItem('user'))
    // }
    return (
        <div className="container">
            <div className="col-md-6">
                <form className="bg-white p-5 contact-form">
                    {/* action="#" method="get" */}
                    <div className="form-group">
                        <input type="text" name="userEmail" 
                        value={userEmail} 
                        onChange={getValueEmail} 
                        className="form-control" placeholder="Your Email" />
                    </div>
                    <div className="form-group">
                        <input type="password" 
                        name="userPassword" 
                        value={userPassword}
                        onChange={getValuePassword} 
                        className="form-control" placeholder="Your password" />
                    </div>
                    <div className="form-group">
                        {/* <button onClick={handCheck}>test</button> */}
                        <input type="submit" onClick={handleClick} value="Login" className="btn btn-primary py-3 px-5" />
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Login
