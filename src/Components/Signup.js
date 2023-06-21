import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export const Signup = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState({
        "email": null,
        "password": null
    })
    const inputHandler = (event) => {
        setUsers({...users, [event.target.name]: event.target.value})
    }
    const signupHandler = (event) => {
        event.preventDefault();
        try {
            //console.log(users);
            axios.post('http://localhost:4000/signup', users).then((res)=>{
                if(res.data.success == true){
                    toast.success("User addedd successfully");
                }
                else{
                    toast.error("Email already exists");
                }
                navigate("/login")
            }).catch(error => console.log(error))    
        } 
        catch (error) {
            console.log(error);
        }
        

    }
   
    return (
        <div className='container'>
            <ToastContainer />
            <div className="row" style={{display: "flex", justifyContent:"center", marginTop: "100px" }}>
                <div className="col-sm-4">
                    <div className="alert alert-info"> 
                            <h3>Signup</h3>
                        <form method='post' onSubmit={signupHandler}>
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
