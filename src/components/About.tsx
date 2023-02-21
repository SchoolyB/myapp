import React from 'react'
import chicago from '../assets/images/aboutImages/city-of-wind.jpg'
import code from '../assets/images/aboutImages/hello-world.jpg'
import cali from '../assets/images/aboutImages/san-diego.jpg'
import htown from '../assets/images/aboutImages/htown.jpg'


export default function About() {
  return (
    
    <>     
      <div id='overallAboutContainer'>  
        <div className='individualAboutChapterContainer'>
        <h2 className='aboutMeHeading' id='cityOfWindHeading'>Hailing From The City of Wind</h2>
          <div id='chapterOne' className='chapterContainer'>
            <div className='paragraphContainer' id='chicagoContainer'>
              <p className='smallPara'>Hello, My name is Marshall Burns and I am a software developer born and raised in Chicago, Illinois. Growing up I was always fascinated with the inner workings of systems and technology so much so that I joined my high schools robotics and AutoCAD clubs</p>            
            </div>
            <img src={chicago} alt='The city of Chicago' />
          </div>
        </div>


        
        <div className='individualAboutChapterContainer'>
          <h2 className='aboutMeHeading' id='californiaHeading'>California Dreamin</h2>
          <div id='chapterTwo' className='chapterContainer'>
            <div className='paragraphContainer' id='caliParagraphContainer'>
              <p className='smallPara'>At the age of 19 I decided to leave home and join the military. I was fortunate enough to be stationed in "America's Finest City" San Diego, California. While serving in the Navy I found a new passion and decided that once I fulfill my contract that I want to go to school for automotive engineering"</p>            
            </div>
            <img src={cali} alt='The San Diego Skyline' />
          </div>
        </div>

        
        <div className='individualAboutChapterContainer'>
          <h2 className='aboutMeHeading' id='houstonHeading'>Houston we have a problem</h2>
          <div id='chapterThree' className='chapterContainer'>
            <div className='paragraphContainer' id='htownParagraphContainer'>
              <p>After I got out of the military I moved to Houston, Texas to pursue a career in automotive engineering. Unfortunatley the universe had other things in store for me. COVID-19 hit hard and mandatory qurantines shut the world down preventing me from finding a job. At the same time I found out that automotive engineering was not my true calling so I left school.</p>

              <p>in early 2022 after a couple emergency room scares I tested positive for COVID-19. I could'nt work due to heart palpitations so I had to resign from my job. I had reached a low point in my life. But as Winston Churchill famously said...
                </p>

                <p>
               "A pessimist sees the difficulty in every opportunity; an 
              optimist sees the opportunity in every difficulty".
              </p>                  
            </div>
            <img src={htown} alt='Houston at night' />
          </div>
        </div>


      
        <div className='individualAboutChapterContainer'>
          <h2 className='aboutMeHeading' id='helloWorldHeading'>Hello World</h2>
          <div id='chapterFour' className='chapterContainer'>
            <div className='paragraphContainer' id='codingParagraphContainer'>
              <p className='smallPara'> While sick with COVID I decided to learn how to code. I started on my phone with YouTube video and a mobile text editor and like all programmers before and after me I wrote my first program...Hello World.</p>            
            </div>
            <img src={code} alt='Code on a screen' />
          </div>
      </div>
  </div>      
</>
  )
}
