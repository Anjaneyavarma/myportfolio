import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ToggleButton from './components/toggleButton';
import Header from './components/header';
import Home from './container/home';

function App() {
  const [select, setSelect] = useState("dark")
  useEffect(()=>{
      localStorage.setItem("theme", select)
      const selectedTheme = localStorage.getItem("theme");
      if (selectedTheme) {
        document.body.classList.add(selectedTheme)
      } else {
        document.body.classList.add("light");
      }
  },[select])


  return (
    <div className={`${select} mx-auto min-h-screen max-w-screen-2xl`}>
      <div className='lg:flex lg:justify-between lg:gap-4 lg:px-12 px-10'>
        <header className='pt-6 lg:sticky lg:top-0 lg:flex flex-col lg:py-24 lg:max-h-screen lg:w-[48%]'>
          <div className='lg:sticky lg:flex flex-col mb-5'>
            <ToggleButton select={select} setSelect={setSelect}/>
          </div>
          <Header/>
        </header>
        <div className='py-24 flex-auto lg:w-1/2'>
            <Home/>
        </div>
      </div>
    </div>
  );
}

export default App;
