import React from 'react'
import "./Home.scss";
import profile from "../../assets/img/33.jpg"
 

const Home = () => {
  
  return (
   
    <div className='home-container'>
<img
className='object_developer 'src={profile}
width ="500px"
alt="developer" /><h1 className="name">Alex Victor</h1>
<h3>Full-Stack Developer</h3>

    </div>
    
  )
}

export default Home
