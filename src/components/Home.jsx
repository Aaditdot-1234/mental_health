import React, {useRef} from 'react'
import styles from '../components/Home.module.css'
import friends from '/friends.png'
import arrow from '/arrow.png'
import { Canvas , useFrame } from '@react-three/fiber'
import { useGLTF,  Html, Stage, PresentationControls } from '@react-three/drei'
import { motion } from 'framer-motion';
import Newspaper from './Newspaper'
import Contacts from './Contacts'


function Model(props){
  const {scene} = useGLTF("/brain_project.glb");
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.001; 
    }
  });

  const brainParts = {
    Brain_Part_01: scene.getObjectByName('Brain_Part_01'),
    Brain_Part_02: scene.getObjectByName('Brain_Part_02'),
    Brain_Part_03: scene.getObjectByName('Brain_Part_03'),
    Brain_Part_04: scene.getObjectByName('Brain_Part_04'),
    Brain_Part_05: scene.getObjectByName('Brain_Part_05'),
    Brain_Part_06: scene.getObjectByName('Brain_Part_06'),
  };

  return (
    <>
      <primitive object={scene} ref={modelRef} {...props} />

      <Html position={brainParts.Brain_Part_01.position} style={{ pointerEvents: 'none' }}>
        <div style={{ color: 'black', backgroundColor: 'white', padding: '5px', borderRadius: '3px' }}>
          <span>Part 01</span>
          <div style={{ transform: 'rotate(45deg)', borderTop: '1px solid black', width: '50px', marginLeft: '25px' }}></div>
        </div>
      </Html>

      <Html position={brainParts.Brain_Part_02.position} style={{ pointerEvents: 'none' }}>
        <div style={{ color: 'black', backgroundColor: 'white', padding: '5px', borderRadius: '3px' }}>
          <span>Part 02</span>
          <div style={{ transform: 'rotate(45deg)', borderTop: '1px solid black', width: '50px', marginLeft: '25px' }}></div>
        </div>
      </Html>

      <Html position={brainParts.Brain_Part_03.position} style={{ pointerEvents: 'none' }}>
        <div style={{ color: 'black', backgroundColor: 'white', padding: '5px', borderRadius: '3px' }}>
          <span>Part 03</span>
          <div style={{ transform: 'rotate(45deg)', borderTop: '1px solid black', width: '50px', marginLeft: '25px' }}></div>
        </div>
      </Html>

      <Html position={brainParts.Brain_Part_04.position} style={{ pointerEvents: 'none' }}>
        <div style={{ color: 'black', backgroundColor: 'white', padding: '5px', borderRadius: '3px' }}>
          <span>Part 04</span>
          <div style={{ transform: 'rotate(45deg)', borderTop: '1px solid black', width: '50px', marginLeft: '25px' }}></div>
        </div>
      </Html>

      <Html position={brainParts.Brain_Part_05.position} style={{ pointerEvents: 'none' }}>
        <div style={{ color: 'black', backgroundColor: 'white', padding: '5px', borderRadius: '3px' }}>
          <span>Part 05</span>
          <div style={{ transform: 'rotate(45deg)', borderTop: '1px solid black', width: '50px', marginLeft: '25px' }}></div>
        </div>
      </Html>

      <Html position={brainParts.Brain_Part_06.position} style={{ pointerEvents: 'none' }}>
        <div style={{ color: 'black', backgroundColor: 'white', padding: '5px', borderRadius: '3px' }}>
          <span>Part 06</span>
          <div style={{ transform: 'rotate(45deg)', borderTop: '1px solid black', width: '50px', marginLeft: '25px' }}></div>
        </div>
      </Html>
    </>  
  )
  
  // const gltf = useGLTF("/brain_project.glb");

  // useEffect(() => {
  //   console.log(gltf.scene.children ); // Explore the model in the console
  // }, [gltf]);

  // return (
  //   <primitive object={gltf.scene} {...props} />
  // );
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
      <div className={styles.random1}></div>
      <div className={styles.brain}>
        <Canvas dpr={[1,2]} camera={{ fov:45 }}>
            <color attach="background" args={["antiquewhite"]}/>
            <PresentationControls speed={5} global zoom={0.85} polar={[-0.1, Math.PI/4]}>
              <Stage environment={null}>
                <Model/>
              </Stage>
            </PresentationControls>
        </Canvas>
      </div>
      <div className={styles.random2}></div>  
      <Contacts/> 
    </div> 
  )
}

export default Home 