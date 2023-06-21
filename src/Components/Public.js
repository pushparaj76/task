import { Navigate } from 'react-router-dom';
export const Public = ({children}) => {
    let localData = localStorage.getItem("token11");
    if(localData){
        return   <Navigate to='/user_dashboard'/>
    }
    else {
        return children
    }
}