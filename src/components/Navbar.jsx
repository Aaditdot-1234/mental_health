import React from 'react'
import styles from '../components/Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <div className={styles.header}>
            <h1>Equillibrium</h1>
        </div>  
        <div className={styles.navbarComp}> 
          <a href="home">Home</a>   
          <a href="news">News</a>  
          <a href="Login">Login</a> 
        </div> 
    </div>  )
}

export default Navbar