import React from 'react'
import styles from '../components/Home.module.css'
import friends from '../../public/friends.png'
import arrow from '../../public/arrow.png'

const Home = () => {
  return (
    <div className={styles.home}> 
      <div>
        <div>
          <p>Welcome to Mind First</p>
          <h2>Putting 'Mind First' is not selfish; it's essential.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p> 
          <button>
            TEST
            <img src={arrow} alt="not found" />
          </button>
        </div>
        <img src={friends} alt="not found" />
      </div>   
    </div> 
  )
}

export default Home