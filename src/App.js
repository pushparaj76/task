import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Login } from './Components/Login';
import { Signup } from './Components/Signup';
import { UserDashoard } from './Components/User/UserDashoard';
import { Logout } from './Components/User/Logout';
import { Public } from './Components/Public';
import { AddBlog } from './Components/User/AddBlog';
import { ManageBlog } from './Components/User/ManageBlog';

function App() {
  return (
   <>
    <Router>
      <Routes>
        <Route path='/login' element={<Public> <Login/> </Public>}></Route>
        <Route path='/' element= {<Signup/>}></Route>
        <Route path='/user_dashboard' element={<UserDashoard />}></Route>
         <Route path='/add_blog' element={<AddBlog />}></Route>
         <Route path='/manage_blog' element={<ManageBlog />}></Route>
        <Route path='/logout' element={<Logout />}></Route>
      </Routes>
    </Router>
   </>
  );
}

export default App;
