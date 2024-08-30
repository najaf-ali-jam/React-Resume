import React from 'react'
import Edu from './Components/Edu&Skills'
import Proj from './Components/Proj'
import Cil from './Components/Cil'

const App = () => {
  return (
    <>
    <div className='start'>
    <div className='main-page'>
      <img src='/njf-img.jpg' alt='image'/>
      <p className='para'>Hi, I am Najaf Ali, I have completed BS-IT in 2023.I have<br></br> skilled in HTML,CSS,BootStrap,
         TailWind,javaScript and <br></br> ReactJs. I am looking for an internship in Frontend web<br></br>development.I
         am interested in MERN Stack developer.</p>
         <br></br>
    </div>
    <div className="informa">
    <div className='mydetail'>
      <h4>Phone No :<span> </span></h4>
      <h4>Email :<span> </span></h4>
      <h4>LinkedIn :<span> </span></h4>
      <h4>Github :<span> </span></h4>
      <h4>Address :<span> </span></h4>
    </div>
    <div className='detail-2'>
     <h4>+92-319-3811125</h4>
     <h4>najafalijam020@gmail.com</h4>
      <h4><a href='https://www.linkedin.com/in/najafali8990/'>https://www.linkedin.com/in/najafali8990/</a></h4>
     <h4><a href='https://github.com/najaf-ali-jam'>https://github.com/najaf-ali-jam</a></h4>
     <h4>Model Town, Lahore, Pakistan.</h4>
    </div>
    </div>
    </div>
         <hr className='first-hr'></hr>
         <Edu/>
         <Proj/>
         <hr className='first-hr'></hr>
         <br></br>
         <Cil/>
    </>
  )
}

export default App