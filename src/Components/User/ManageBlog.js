import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Layout } from '../Layouts/Layout'
import { ToastContainer } from 'react-toastify';
export const ManageBlog = () => {

  const [allblogs, setAllblogs] = useState([

  ]);

  useEffect(() => {
    axios.get('http://localhost:4000/manage',
    ).then((res) => {
      setAllblogs(res.data.blogsData);
    }).catch(error => console.log(error));

  })
  return (
    <>
      <Layout>
        <ToastContainer />
        <section id="middel-content">
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th>Descirption</th>
                </tr>
              </thead>
              <tbody>
                {allblogs.map((items, index) => {
                  return (
                    <tr key={index}>
                      <td><p>{items.description}</p></td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </section>
      </Layout>
    </>
  )
} 