// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import './newspaper.css';
// import { div } from 'three/webgpu';

// const newsData = [
//   { 
//     title: "Mental Health Awareness Rises", 
//     content: "More people are becoming aware of mental health issues, leading to an increase in discussions and resources available to those in need.", 
//     id: 0, 
//     image: "mental.png",  
//   },
//   { 
//     title: "Innovative Therapy Techniques", 
//     content: "New therapy techniques, such as virtual reality and AI-driven approaches, are revolutionizing the mental health field.", 
//     id: 1, 
//     image: "/friends.png",
//     delay: 60,
//     index:6
//   },
//   { 
//     title: "Combating Burnout in the Workplace", 
//     content: "Employers are increasingly focusing on strategies to combat burnout, including mental health days and wellness programs.", 
//     id: 2, 
//     image: "/friends.png",
//     delay: 50, 
//     index:5
//   },
//   { 
//     title: "The Importance of Self-Care", 
//     content: "Self-care is being recognized as a crucial component of mental health, with more resources available to guide individuals.", 
//     id: 3, 
//     image: "/friends.png",
//     delay: 40, 
//     index:4 
//   },
//   { 
//     title: "Mental Health in Schools", 
//     content: "Schools are integrating mental health education into their curricula, helping students understand and manage their emotions better.", 
//     id: 4, 
//     image: "/friends.png",
//     delay: 30,
//     index:3
//   },
//   { 
//     title: "Addressing Anxiety in Teens", 
//     content: "Rising levels of anxiety among teenagers are being addressed through innovative programs and support systems.", 
//     id: 5, 
//     image: "/friends.png",
//     delay: 20,
//     index:2
//   },
//   { 
//     title: "Support for Postpartum Depression", 
//     content: "New support groups and treatment options are emerging for mothers experiencing postpartum depression.", 
//     id: 6, 
//     image: "/friends.png",
//     delay: 10,
//     index:1  
//   }, 
// ];

// const Newspaper = () => { 
//   const firstPage = newsData.filter(page => 
//     page.id === 0
//   );

//   const page1 = firstPage.map(page => 
//     <div 
//       key={page.id} 
//       className='page1' 
//     >
//       <a>
//         <img src={page.image} alt="not found" />
//       </a>
//       <a>{page.title}</a>
//       <p>{page.content}</p>
//     </div>
//   ); 
   
//   const rest = newsData.filter(page => 
//       page.id !== 0
//   ); 
  
//   const pages = rest.map(page => 
//     <motion.div 
//       key={page.id} 
//       className='page'
//       style={{
//         transformStyle: 'preserve-3d',
//         transformOrigin: 'left'
//       }} 
//       initial={{zIndex: page.id}}
//       whileInView={{rotateY:180}}
//       transition={{delay: page.delay , duration:3}}
//       onAnimationComplete={{zIndex: page.index}}
//     >
//       <a>
//         <img src={page.image} alt="not found" />
//       </a>
//       <a>{page.title}</a>
//       <p>{page.content}</p>
//     </motion.div>
//   ); 
  
//   return ( 
//     <div className='newsp'>
//       <div className='backPageSection'>{page1}</div>
//       <div className='frontPageSection'>{pages}</div>
//     </div>
//     );
// };

// export default Newspaper; 

import React, { useState } from 'react';
import { motion, progress } from 'framer-motion';
import './newspaper.css';

const newsData = [
  { 
    title: "Mental Health Awareness Rises", 
    content: "More people are becoming aware of mental health issues, leading to an increase in discussions and resources available to those in need.", 
    id: 0, 
    image: "mental.png",  
  },
  { 
    title: "Innovative Therapy Techniques", 
    content: "New therapy techniques, such as virtual reality and AI-driven approaches, are revolutionizing the mental health field.", 
    id: 1, 
    image: "/friends.png",
    delay: 60,
    index: 6
  },
  { 
    title: "Combating Burnout in the Workplace", 
    content: "Employers are increasingly focusing on strategies to combat burnout, including mental health days and wellness programs.", 
    id: 2, 
    image: "/friends.png",
    delay: 50, 
    index: 5
  },
  { 
    title: "The Importance of Self-Care", 
    content: "Self-care is being recognized as a crucial component of mental health, with more resources available to guide individuals.", 
    id: 3, 
    image: "/friends.png",
    delay: 40, 
    index: 4 
  },
  { 
    title: "Mental Health in Schools", 
    content: "Schools are integrating mental health education into their curricula, helping students understand and manage their emotions better.", 
    id: 4, 
    image: "/friends.png",
    delay: 30,
    index: 3
  },
  { 
    title: "Addressing Anxiety in Teens", 
    content: "Rising levels of anxiety among teenagers are being addressed through innovative programs and support systems.", 
    id: 5, 
    image: "/friends.png",
    delay: 20,
    index: 2
  },
  { 
    title: "Support for Postpartum Depression", 
    content: "New support groups and treatment options are emerging for mothers experiencing postpartum depression.", 
    id: 6, 
    image: "/friends.png",
    delay: 10,
    index: 1  
  }, 
];

const Newspaper = () => { 
  const [zIndex, setZIndex] = useState(
    newsData.filter(page => page.id !== 0).map(page => page.index)
  );

  const firstPage = newsData.filter(page => page.id === 0);

  const page1 = firstPage.map(page => (
    <div 
      key={page.id} 
      className='page1' 
    >
      <a>
        <img src={page.image} alt="not found" />
      </a>
      <a>{page.title}</a>
      <p>{page.content}</p>
    </div>
  )); 

  const rest = newsData.filter(page => page.id !== 0);

  const handleAnimationUpdate = (pageId, progress) => {
    setZIndex((prevZIndex) => {
      const newZIndex = [...prevZIndex];
      const index = rest.findIndex(page => page.id === pageId);
      if (index !== -1) {
        newZIndex[index] = Math.max(1, newZIndex.length - index + Math.floor(progress * (newZIndex.length - index))); // Adjust zIndex during animation
      }
      return newZIndex;
    });
  };

  const pages = rest.map(page => (
    <motion.div 
      key={page.id} 
      className='page'
      style={{
        transformStyle: 'preserve-3d',
        transformOrigin: 'left',
        zIndex: zIndex[rest.findIndex(p => p.id === page.id)]
      }} 
      initial={{ rotateY: 0 }}
      animate={{ rotateY: 180 }}
      transition={{ delay: page.delay, duration: 3 }}
      onUpdate={(latest) => handleAnimationUpdate(page.id, latest.rotateY / 180)}
    > 
      <a>
        <img src={page.image} alt="not found" />
      </a>
      <a>{page.title}</a>
      <p>{page.content}</p>
    </motion.div>
  ));

  return ( 
    <div className='newsp'>
      <div className='backPageSection'>{page1}</div>
      <div className='frontPageSection'>{pages}</div>
    </div>
  );
};

export default Newspaper;
