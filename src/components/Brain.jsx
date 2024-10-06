import React, {useRef, useEffect, useState} from 'react'
import { Canvas , useFrame } from '@react-three/fiber'
import { useGLTF, Stage, PresentationControls } from '@react-three/drei'
import './Brain.css';

const disorders = {
    depression: {
      name: 'Depression',
      description: 'A mood disorder characterized by persistent feelings of sadness, loss of interest, and various emotional and physical problems.',
    },
    anxiety: {
      name: 'Anxiety',
      description: 'A mental health disorder characterized by feelings of worry, anxiety, or fear that are strong enough to interfere with one\'s daily activities.',
    },
    bipolar: {
      name: 'Bipolar Disorder',
      description: 'A mental health condition marked by extreme mood swings, including emotional highs (mania or hypomania) and lows (depression).',
    },
    schizophrenia: {
      name: 'Schizophrenia',
      description: 'A serious mental disorder that affects how a person thinks, feels, and behaves, often characterized by hallucinations and delusions.',
    },
    ocd: {
      name: 'Obsessive-Compulsive Disorder (OCD)',
      description: 'An anxiety disorder characterized by unwanted repetitive thoughts (obsessions) and actions (compulsions).',
    },
    ptsd: {
      name: 'Post-Traumatic Stress Disorder (PTSD)',
      description: 'A mental health condition triggered by experiencing or witnessing a traumatic event, leading to severe anxiety and flashbacks.',
    },
    adhd: {
      name: 'Attention-Deficit/Hyperactivity Disorder (ADHD)',
      description: 'A neurodevelopmental disorder characterized by difficulty paying attention, hyperactivity, and impulsive behavior.',
    },
    autism: {
      name: 'Autism Spectrum Disorder (ASD)',
      description: 'A developmental disorder that affects communication and behavior, often characterized by difficulties in social interaction.',
    },
    eating_disorders: {
      name: 'Eating Disorders (Anorexia, Bulimia)',
      description: 'Serious conditions related to persistent eating behaviors that negatively impact health, emotions, and quality of life.',
    },
    dementia: {
      name: 'Dementia',
      description: 'A general term for a decline in mental ability severe enough to interfere with daily life, often involving memory loss and cognitive decline.',
    },
};
  
function Model(props){
    const { scene } = useGLTF("/brain_project.glb");
    const modelRef = useRef();

    useFrame(() => {
        if (modelRef.current) {
        modelRef.current.rotation.y += 0.001; 
        }
    });

    return (
        <>
        <primitive object={scene} ref={modelRef} {...props} />
        </>  
    )
}

const DisorderCarousel = ({ currentDisorderIndex, setCurrentDisorderIndex }) => {
    const disorderKeys = Object.keys(disorders);
  
    const handleNext = () => {
      setCurrentDisorderIndex((prevIndex) => (prevIndex + 1) % disorderKeys.length);
    };
  
    const handlePrevious = () => {
      setCurrentDisorderIndex((prevIndex) => (prevIndex - 1 + disorderKeys.length) % disorderKeys.length);
    };
  
    return (
      <div className="carousel">
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    );
  };
    
const Brain = () => {
  const [currentDisorderIndex, setCurrentDisorderIndex] = useState(0);
  const disorderKeys = Object.keys(disorders);
  const currentDisorder = disorderKeys[currentDisorderIndex];  
  
  return (
    <div className='brain'> 
        <div className='overlay'>
            <div>
                <h2>{disorders[currentDisorder].name}</h2>
                <p>{disorders[currentDisorder].description}</p>
            </div>
            <div>
                <DisorderCarousel
                    currentDisorderIndex={currentDisorderIndex}
                    setCurrentDisorderIndex={setCurrentDisorderIndex}
                />
            </div>
        </div>
        <Canvas dpr={[1,2]} camera={{ fov:45 }}>
            <color attach="background" args={["antiquewhite"]}/>
            <PresentationControls speed={5} global zoom={0.85} polar={[-0.1, Math.PI/4]}>
            <Stage environment={null}>
                <Model/>
            </Stage>
            </PresentationControls>
        </Canvas>
    </div>
  )
}

export default Brain