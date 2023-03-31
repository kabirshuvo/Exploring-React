import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import Aside from './components/Aside/Aside';
import HeroSection from './components/HeroSection/HeroSection';
import NavBar from './components/NavBar/NavBar';

function App() {

  const [readingTime, setReadingTime]=useState('');
  const addReadingTime = (time) => {
    const previousReadingTime = JSON.parse(localStorage.getItem("readingTime"));
    if(previousReadingTime){
      const sum = previousReadingTime + time;
      localStorage.setItem("readingTime", sum);
      setReadingTime(sum);
    }else{
      localStorage.setItem("readingTime", time);
      setReadingTime(time);
    }
  };
  
  return (
    <div className="App">
      <div className='w-100'>
      <NavBar></NavBar>
      <div>

        <div className='main row '>
          <div className='home-container col-lg-8'>
              <HeroSection addReadingTime={addReadingTime}></HeroSection>
          </div>
          <div className='aside-container col-lg-3 position-relative '>

         <div className='position-fixed px-5 m-4'>
          <Aside readingTime={readingTime}></Aside>

         </div>

          </div>

        </div>








     
        
      </div>
     </div>
    </div>
  )
}

export default App
