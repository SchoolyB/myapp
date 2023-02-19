import React from 'react'
import chicago from '../assets/images/city-of-wind.jpg'
import code from '../assets/images/hello-world.jpg'
import cali from '../assets/images/san-diego.jpg'


export default function About() {
  return (
    <>
      
        <div>
        <h2 className='aboutMeHeading' id='cityOfWindHeading'>The City of Wind</h2>
          <div id='chapterOne' className='chapterContainer'>
            <div className='paragraphContainer' id='chicagoContainer'>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis aut id hic ea ipsum quam doloremque quaerat nisi numquam quibusdam, assumenda sit, totam omnis nihil quae? Corrupti tempore sapiente totam.</p>            
            </div>
            <img src={chicago} alt='The city of Chicago' />
          </div>
        </div>


        
        <div>
          <h2 className='aboutMeHeading' id='californiaHeading'>California Dreamin</h2>
          <div id='chapterTwo' className='chapterContainer'>
            <div className='paragraphContainer' id='caliParagraphContainer'>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis aut id hic ea ipsum quam doloremque quaerat nisi numquam quibusdam, assumenda sit, totam omnis nihil quae? Corrupti tempore sapiente totam.</p>            
            </div>
            <img src={cali} alt='The San Diego Skyline' />
          </div>
        </div>

      
        <div>
          <h2 className='aboutMeHeading' id='helloWorldHeading'>Hello World</h2>
          <div id='chapterThree' className='chapterContainer'>
            <div className='paragraphContainer' id='codingParagraphContainer'>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis aut id hic ea ipsum quam doloremque quaerat nisi numquam quibusdam, assumenda sit, totam omnis nihil quae? Corrupti tempore sapiente totam.</p>            
            </div>
            <img src={code} alt='Code on a screen' />
          </div>
      </div>
      
    </>
  )
}
