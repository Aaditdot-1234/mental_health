import React from 'react'
import styles from '../components/Home.module.css'
import friends from '/friends.png'
import arrow from '/arrow.png'
import { motion } from 'framer-motion';
import Newspaper from './Newspaper'
import Brain from './Brain';
import Therapist from './Therapist';
import Work from './Working';

const Home = () => {
  return (
    <div className={styles.home}>
      <div id='home' className={styles.contentWrapper}>
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
              initial={{ opacity:0, x: -100 }}
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
      <br /><br />
      <Work/>
      <Therapist/> 
      <div id='news' className={styles.news}>
        <div className={styles.underlay2}>
          <img src="/news.jpg" alt="not found" />
        </div>
        <div className={styles.overlay2}>
          <div className={styles.newsinner}>
            <div></div>
            <span>NEWS</span>
          </div>
          <h1>Check out latest News and updates regarding mental health</h1>
          <br /><br /><br />
          <Newspaper/>
        </div>
      </div>
      <div className={styles.random1}>
        <div className={styles.random1inner}></div>
      </div>
      <Brain/>
      <div className={styles.random2}>
        <div className={styles.random2inner}></div>  
      </div>   
      <div id='appointment' className={styles.appointment}>
        <div className={styles.appointmentinner}>
          <div></div>  
          <div></div>  
        </div> 
        <div className={styles.contacts}>
          <div>
            <div>
              <h2>The professional, licensed, and vetted Psychologist who you can trust</h2>
              <br /><br />
              <span
                style={{
                  fontSize:'20px'
                }}
              >Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
            </div>
            <div className={styles.team}>
              <p>Our Team</p>
              <div>
                <div></div>
                <div className={styles.left}></div>
                <div className={styles.center}></div>
                <div className={styles.right}></div>
                <div></div>
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.appointmentform}>
          <motion.div
              initial={{ opacity:0, x :+100}}
              whileInView={{ opacity:1, x : 0}}
              transition={{ delay:1, duration: 3, type: 'spring', stiffness: 50}}
              viewport={{ once: true, amount: 0.5 }}  
              className={styles.motiondiv}          
          >
            <div className={styles.appointform1}>
              <div className={styles.info1}>
                <h1>Need more help?</h1>
                <p>Consequat pede primis placerat senectus hac molestie et ultricies eros</p>
              </div>
              <div className={styles.info2}></div>
              <div>
                <h1>Customer Service</h1>
                <p>888-7337-234</p>
              </div>
              <div>
                <h1>Ticket Support</h1>
                <p>Send Now!</p>
              </div>
              <div>
                <h1>Opening Hours</h1>
                <p>Monday – Saturday</p>
                <p>(10:30 AM – 7:00 PM)</p>
              </div>
            </div>
            <div className={styles.form}>
              <div className={styles.appointform2}>
                <div>
                  <h4>First name</h4>
                  <input type="text" placeholder='First Name'/>
                </div>
                <div>
                  <h4>Last name</h4>
                  <input type="text" placeholder='Last Name'/>
                </div>
                <div>
                  <h4>Phone</h4>
                  <input type="text" placeholder='Phone'/>
                </div>
                <div>
                  <h4>E-Mail</h4>
                  <input type="text" placeholder='E-mail'/>
                </div>
                <div>
                  <h4>Date</h4>
                  <input type="text" placeholder='dd-mm-yyyy'/>
                </div>
                <div>
                  <h4>Time</h4>
                  <input type="text"/>
                </div>
              </div>
              <div 
                style={{
                  display:'flex',
                  flexDirection:'column',
                  gap:'10px',
                  marginLeft:'90px',
                  marginTop: '0px'
                }}
              >
                <div>
                  <h4>Message</h4>
                  <textarea placeholder='Message'></textarea>
                </div>
                <div>
                  <button>
                    <img src="/appoint.png" alt="not found" />
                    Book an appointment
                  </button>
                </div>
              </div>
            </div>
          </motion.div>  
        </div>  
      </div>
      <div className={styles.Description}>
        <div></div>
        <div className={styles.Descriptioninner}>
          <div>
            <h1>Mind First</h1>
            <div>
              <img src="/facebook.png" alt="not found" />
              <img src="/insta.png" alt="not found" />
              <img src="/twitter.png" alt="not found" />
              <img src="/yt.png" alt="not found" />
            </div>
            <label>Copyright © 2024 ASK Project</label>
          </div>
          <div>
            <label>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis sunt vel ab inventore quod eaque consequuntur dicta iusto voluptatem expedita adipisci, impedit suscipit quia accusantium odit aspernatur! Ratione, nisi dignissimos.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis sunt vel ab inventore quod eaque consequuntur dicta iusto voluptatem expedita adipisci, impedit suscipit quia accusantium odit aspernatur! Ratione, nisi dignissimos.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis sunt vel ab inventore quod eaque consequuntur dicta iusto voluptatem expedita adipisci, impedit suscipit quia accusantium odit aspernatur! Ratione, nisi dignissimos.</label>
            <div>
              <a href="">Privacy Policy</a>
              <a href="">Terms and Services</a>
            </div>
          </div>
        </div>
      </div> 
    </div> 
  )
}

export default Home  