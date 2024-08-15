import React from 'react'
import styles from '../components/Home.module.css'
import friends from '/friends.png'
import arrow from '/arrow.png'
import { Canvas } from '@react-three/fiber'
import { useGLTF , Stage ,PresentationControls } from '@react-three/drei'
import { motion } from 'framer-motion';
import Newspaper from './Newspaper'

function Model(props){
  const {scene} = useGLTF("/brain_project.glb"); 
  return <primitive object={scene} {...props}/>
}

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.contentWrapper}>
        <div className={styles.underlay}>
          <div></div>
          <img src={friends} alt="friends" />
        </div>
        <div className={styles.overlay}>
          <div>
            <motion.p
              initial={{ opacity:0, x :-100}}
              animate={{ opacity:1, x : 0}}
              transition={{ delay:1, duration: 2, type: 'spring', stiffness: 50}}
            >
              Welcome to Mind First
            </motion.p>
            <h2>Putting 'Mind First' is not selfish; it's essential.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p> 
            <motion.button
              initial={{ opacity:0, x :-100}}
              animate={{ opacity:1, x : 0}}
              transition={{ delay:2, duration: 2, type: 'spring', stiffness: 50}}                
            >
              TEST
              <img src={arrow} alt="not found" />
            </motion.button>
          </div>
        </div>
      </div>
      <div className={styles.contentWrapper2}>
        <div className={styles.imgContainer}>
          <div>
            <img src="/image1.webp" alt="Not found" />
          </div>
        </div>
        <div></div>
        <div className={styles.aim}>
          <div>
            <div></div>
            <h2>OUR AIM</h2>
          </div>
          <div>
            <h1>We aim to empower individuals to achieve their personal and professional.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </div>
          <div>
            <div></div>
            <p><i>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."</i></p>
          </div>
          <div>
            <motion.div
                initial={{ opacity:0, x: -1000 }}
                whileInView={{ opacity:1, x: 0 }}
                transition={{ duration: 4, type: 'spring', stiffness: 25 }}
                viewport={{ once: true, amount: 0.5 }}   
            >
              <h3>Coaching and Psychologica</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </motion.div>
            <motion.div
                initial={{ opacity:0, x: +200 }}
                whileInView={{ opacity:1, x: 0 }}
                transition={{ duration: 4, type: 'spring', stiffness: 25 }}
                viewport={{ once: true, amount: 0.5 }}   
            >
              <video autoPlay muted loop>
                <source src='/counselling.mp4' type='video/mp4'/>
              </video>
            </motion.div>
          </div>
        </div>
      </div> 
      <div className={styles.news}>
        <div className={styles.underlay2}>
          <img src="/news.jpg" alt="not found" />
        </div>
        <div className={styles.overlay2}>
          <div className={styles.newsinner}>
            <div></div>
            <p>NEWS</p>
          </div>
          <h1>Check out latest News and updates regarding mental health</h1>
          <br /><br /><br />
          <Newspaper/>
        </div>
      </div>
      <div className={styles.brain}>
        <Canvas dpr={[1,2]} camera={{ fov:45 }}>
            <color attach="background" args={["black"]}/>
            <PresentationControls speed={5} global zoom={0.4} polar={[-0.1, Math.PI/4]}>
              <Stage environment={null}>
                <Model/>
              </Stage>
            </PresentationControls>
        </Canvas>
      </div>   
    </div> 
  )
}

export default Home 
        