import React from 'react'

export default function Contact() {
  return (
  <>
    <div id='contactContainer' className='topicContainer'>Contact Me
          <div id='contactForm'>
            <form action='https://formspree.io/f/mknelldn' method='POST'>
              <label className='contactLabel' id='contactName'>
                <input placeholder='Please enter your name'></input>
              </label>

              <label className='contactLabel' id='contactEmail'>
                <input placeholder='Please enter your email'></input>
              </label>

              <label className='contactLabel' id='contactMsg'>
                <input placeholder='Please leave a message'></input>
              </label>
              <button role='button' type='submit' id='contactSubmitButton'>Submit</button>
            </form>
          </div>
      </div>
    </>
  )
}
