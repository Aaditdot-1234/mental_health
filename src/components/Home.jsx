import React from 'react'
import styles from '../components/Home.module.css'
import friends from '../../public/friends.png'

const Home = () => {
  return (
    <div className={styles.home}>
        <img src={friends} alt="not found" />
    </div>
  )
}

export default Home