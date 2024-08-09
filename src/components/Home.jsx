import React from 'react'
import styles from '../components/Home.module.css'
import friends from '/friends.png'
import arrow from '/arrow.png'
import { Canvas } from '@react-three/fiber'
import { useGLTF , Stage ,PresentationControls } from '@react-three/drei'

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
            <p>Welcome to Mind First</p>
            <h2>Putting 'Mind First' is not selfish; it's essential.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p> 
            <button>
              TEST
              <img src={arrow} alt="not found" />
            </button>
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
            <div>
              <h3>Coaching and Psychologica</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div>
              <video autoPlay muted loop>
                <source src='/counselling.mp4' type='video/mp4'/>
              </video>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.contentWrapper3}></div>
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
        