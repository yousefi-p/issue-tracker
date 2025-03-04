import React from 'react'
import styles from '@/styles/NavigationBar.module.css'
import Untitled from '@/public/images/Untitled-1.png'
import kish_logo from '@/public/images/kish_logo.png'

function AdminNavigation() {
  return (
<nav className={styles.navbar + " navbar navbar-expand-md navbar-dark "}>
    <div className="container-fluid">
        <div className={"navbar-brand "+ styles.userInfo}>
            <img src={Untitled.src} alt="User" />
            <span className="text-white">اهورا عطاران</span>
        </div>


        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

        <div className="collapse navbar-collapse justify-content-start " id="navbarNav" dir='rtl'>
          <ul className='navbar-nav'>
            <li className='nav-item'><a href="" className='nav-link'>تعاریف</a></li>
            <li className='nav-item'><a href="" className='nav-link'>کاربران</a></li>
            <li className='nav-item'><a href="" className='nav-link'>تیکت‌ها</a></li>
          </ul>
        </div>

        {/* <!-- Logo (Middle) --> */}
        <div className={styles.logoContainer}>
            <img src={kish_logo.src} alt="Company Logo" className={styles.logo} />
        </div>
    </div>
</nav>
  )
}

export default AdminNavigation
