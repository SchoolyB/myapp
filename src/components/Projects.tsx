import React from 'react'
import idm from '../assets/images/projectImages/idmScreenshot.png'
import plutus from '../assets/images/projectImages/plutusScreenshot.png'
import husk from '../assets/images/projectImages/husk.png'

export default function Projects() {
  return (
    <>
      <div id='overallProjectsContainer'>
        <h1 id='projectsHeading'>Projects</h1>
        <div id='projects'>
          {/* TODO: take a 10 second video of each project to use instead of images */}

          <div id='idm' className='individualProject'>
            <h3 className='individualProjectHeading' id='idmHeading'>The International Data Matrix</h3>
            <img id='idmScreenshot' className='screenshot' src={idm} alt='A screenshot of The IDM'/>
            <div className='projectLinks'>
              <a className='githubLink' id='idmRepoLink' href='https://github.com/SchoolyB/International-Data-Matrix'>GitHub</a>
              
              <a className='siteLink' id='idmSiteLink' href='https://international-data-matrix.vercel.app/'>Site</a>

            </div>
          </div>


          <div id='plutus' className='individualProject'>
            <h3 className='individualProjectHeading' id='idmHeading'>Plutus</h3>
            <img id='plutusScreenshot' className='screenshot' src={plutus} alt='A screenshot of Plutus'/>
             <div className='projectLinks'>    
              <a className='githubLink' id='plutusRepoLink' href='https://github.com/SchoolyB/Plutus'>GitHub</a>  
            </div>
          </div>


                    
          <div id='husk' className='individualProject'>
            <h3 className='individualProjectHeading' id='idmHeading'>Husk</h3>
            <img id='huskLogo' className='screenshot' src={husk} alt='The Husk Logo'/>
             <div className='projectLinks'>    
              <a className='githubLink' id='huskRepoLink' href='https://github.com/SchoolyB/Husk'>GitHub</a>  
            </div>
          </div>



        </div> 
      </div>
    </>
  )
}
