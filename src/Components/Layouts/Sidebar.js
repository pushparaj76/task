import React from 'react'
import { Link } from 'react-router-dom'
import { userMenu } from '../User/menudata'
export const Sidebar = () => {
  return (
    <section id="left-sidebar">
        <ul>
            {userMenu.map((items, index)=>{
                return(
                    <li key={index}>
                        <Link to={items.path}>
                            <i className={items.icon}></i>
                            <span>{items.name}</span>
                        </Link>
                    </li>
                )
            })}
        </ul>
    </section>
  )
}
