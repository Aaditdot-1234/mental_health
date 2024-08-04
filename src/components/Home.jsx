import React from 'react'
import styles from '../components/Home.module.css'
import friends from '../../public/friends.png'

const Home = () => {
  return (
    <div className={styles.home}> 
      <div>
        <p>Welcome to Mind First</p>
        <h2>Putting 'Mind First' is not selfish; it's essential.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        <hr></hr>
      </div>
      <img src={friends} alt="not found" />
    </div>
  )
}

export default Home