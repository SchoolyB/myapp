import React from 'react'
import chicago from '../assets/images/city-of-wind.jpg'
import code from '../assets/images/hello-world.jpg'
import cali from '../assets/images/san-diego.jpg'
export default function About() {
  return (
    <>
      <div id='aboutContainer' className='topicContainer'>

        <div id='chapterOne' className='about'>
          <h2 className='aboutMeHeading' id='cityOfWindHeading'>The City of Wind</h2>
          <p><img id='imgOfChicago'  src={chicago} alt='The city of Chicago' />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis aut id hic ea ipsum quam doloremque quaerat nisi numquam quibusdam, assumenda sit, totam omnis nihil quae? Corrupti tempore sapiente totam.</p>
        </div>

        <div id='chapterTwo' className='about'>
          <h2 className='aboutMeHeading' id='californiaHeading'>California</h2>
          <p><img id='california'  src={cali} alt='The city of San Diego' />Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente aperiam iusto accusamus. Dolores numquam molestias atque modi mollitia accusantium eveniet sit deleniti obcaecati fugiat qui ducimus minima beatae, ratione blanditiis!</p>
        </div>
        
        <div id='chapterThree' className='about'>
          <h2 className='aboutMeHeading' id='helloWorldHeading'>Hello World</h2>
          <p><img id='helloWorld'  src={code} alt='Code' />Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae alias natus ab necessitatibus molestiae iste libero quo obcaecati dolorum aspernatur, deserunt suscipit voluptates mollitia deleniti est illo harum ratione repellat!</p>
        </div>
        
        
      </div>
    </>
  )
}
