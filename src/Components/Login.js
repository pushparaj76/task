import React, { useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
export const Login = () => {
     const navigate = useNavigate();
    const [userData, setUserData] = useState({
        "email": "",
        "password": ""
    }); 
    const inputHandler = (event) => {
        setUserData({...userData, [event.target.name]: event.target.value});
    }
    const loginHandler = (event) => {
        event.preventDefault();
        axios.post("http://localhost:4000/login", userData).then((res)=>{
            if(res.data.success){
                localStorage.setItem("token11", res.data.token)
                toast.success(res.data.message)
            }
            else{
                toast.error(res.data.message);
            }
            navigate("/user_dashboard")
        }).catch(error => console.log(error));
        
    }
    

    return (
        <div className='container'>
             <ToastContainer />
            <div className="row" style={{display: "flex", justifyContent:"center", marginTop: "100px" }}>
                <div className="col-sm-4">
                    <div className="alert alert-info"> 
                            <h3>Login</h3>
                        <form method='post' onSubmit={loginHandler}>
                            <div className='form-group'>
                                <label htmlFor="">Email</label>
                                <input type="email" name='email' className='form-control' onChange={inputHandler} />
                            </div>
                            <div className='form-group'>
                                <label htmlFor="">Password</label>
                                <input type="password" name='password' className='form-control' onChange={inputHandler} />
                            </div>
                            <div className='form-group'>
                                <input type="submit" name='btnSubmit' className='btn btn-primary' value="Login" />
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}
