import React, { useState } from 'react'
import { Layout } from '../Layouts/Layout'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

export const AddBlog = () => {
    const [inputValue, setInputValue] = useState({
        "blog_description": "",
    });

    const inputHandler = (event) => {
        
        setInputValue({ ...inputValue, [event.target.name]: event.target.value });
    }

    const addBlog = (event) => {
        event.preventDefault();
        axios.post('http://localhost:4000/addblog', inputValue, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token11")
            }
        }).then((res) => {

            if (res.data.success) {
                
                toast.success(res.data.message);
            } else {
                localStorage.removeItem("token11");
                toast.error(res.data.message);
            }
        });
         setInputValue({
            "blog_description": "" ,
        })
        
        
    }
    return (
        <Layout>
            <ToastContainer />
            <section id="middel-content">
                <h3 className='site-head-title'>Add Blog</h3>
                <form action="" onSubmit={addBlog}>
                    <div className='middle-data'>
                        <div className='form-group'>
                            <label htmlFor="">Description</label>
                            <textarea className='form-control' name='blog_description'
                                onChange={inputHandler} value={inputValue.blog_description} ></textarea>
                        </div>
                        <div className='form-group'>
                            <input type="submit" className='btn btn-info' value="Add Blog" />
                        </div>
                    </div>
                </form>
            </section>
        </Layout>

    )
}
