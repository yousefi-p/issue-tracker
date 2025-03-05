'use client';
import kish_logo from "@/public/images/kish_logo.png";
import Untitled from "@/public/images/Untitled-1.png";
import mystyles from "@/styles/NavigationBar.module.css";
import { useEffect, useState } from "react";


function NavigationBar() {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [ipAddress, setIpAddress] = useState<string>("");
  

  useEffect(() => {

      const now = new Date();
      const formattedTime = now.toLocaleString('fa-IR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
      setCurrentTime(formattedTime);
      
  }, []);

  
  return (
<nav className={mystyles.navbar + " navbar navbar-expand-md navbar-dark "}>
    <div className="container-fluid">
        <div className={"navbar-brand "+ mystyles.userInfo}>
            <img src={Untitled.src} alt="User" />
            <span className="text-white">اهورا عطاران</span>
        </div>


        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

        <div className="collapse navbar-collapse justify-content-end " id="navbarNav">
            <h5 dir="rtl" className="text-white">{currentTime}</h5>
        </div>

        {/* <!-- Logo (Middle) --> */}
        <div className={mystyles.logoContainer}>
            <img src={kish_logo.src} alt="Company Logo" className={mystyles.logo} />
        </div>
    </div>
</nav>
  )
}

export default NavigationBar
