import logo from './logo.svg';
// import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Rout from "./Rout";
import Login from "./Component/Login";
import Register from "./Component/Register";
import Layout from "./Component/Layout";
import AboutUs from "./Component/AboutUs";
import AddCourse from "./Component/add-course";
function App() {
  return (

     <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Layout />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/add-course" element={ <AddCourse/>} />
        </Routes>
        <Rout />
        
      </BrowserRouter>
    </div>
  );
}

export default App;
