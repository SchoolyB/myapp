import React from 'react'
import python from '../assets/images/tech_stack_icons/python.png'
import js from '../assets/images/tech_stack_icons/js.png'
import ts from '../assets/images/tech_stack_icons/typescript.png'
import html from '../assets/images/tech_stack_icons/html-5.png'
import css from '../assets/images/tech_stack_icons/css-3.png'
import cLang from '../assets/images/tech_stack_icons/c.png'
import expressjs from '../assets/images/tech_stack_icons/expressjs.png'
import node from '../assets/images/tech_stack_icons/node-js.png'
import mysql  from '../assets/images/tech_stack_icons/mysql.png'
import vite from '../assets/images/tech_stack_icons/vite.png'
import vercel from '../assets/images/tech_stack_icons/Vercel.png'
import git from '../assets/images/tech_stack_icons/git.png'
import github from '../assets/images/tech_stack_icons/github.png'
import gitlab from '../assets/images/tech_stack_icons/gitlab.png'
import react from '../assets/images/tech_stack_icons/react.png'
import netlify from '../assets/images/tech_stack_icons/netlify.png'
import insomina from '../assets/images/tech_stack_icons/insomnia.png'
import mongo from '../assets/images/tech_stack_icons/mongo.png'
import render from '../assets/images/tech_stack_icons/render.png'
import figma from '../assets/images/tech_stack_icons/figma.png'
import code from '../assets/images/tech_stack_icons/code.png'
import pycharm from '../assets/images/tech_stack_icons/pycharm.png' 






export default function TechStack() {

  return (
    <>
      <div id='techStackContainer'>
        <h1 id='techStackHeading'>My Tech Stack</h1>
        <div id='techStack'>
          {/* languages */}
          <div id='languages' className='logoSection'>
            <div className='circularBackground'>
              <img alt='logo of ' src={python} className='techStackLogo' id='pythonLogo' />
            </div>
            <div className='circularBackground'>
              <img alt='logo of ' src={js} className='techStackLogo' id='javascriptLogo' />
            </div>
            <div className='circularBackground'>
              <img alt='logo of ' src={ts} className='techStackLogo' id='typescriptLogo' />
            </div>
            <div className='circularBackground'>
              <img alt='logo of ' src={cLang} className='techStackLogo' id='cLangLogo' />
            </div>
            <div className='circularBackground'>
              <img alt='logo of ' src={html} className='techStackLogo' id='htmlLogo' />
            </div>
            <div className='circularBackground'>
              <img alt='logo of ' src={css} className='techStackLogo' id='cssLogo' />
              </div>
          </div>

          {/* frontend */}
          <div id='frontend' className='logoSection'>
            <div className='circularBackground'>
              <img alt='logo of ' src={react} className='techStackLogo' id='reactLogo' />
            </div>
            <div className='circularBackground'>
              <img alt='logo of ' src={vite} className='techStackLogo' id='viteLogo'/>
            </div>
          </div>

          {/* backend */}
          <div id='backend' className='logoSection '>
            <div className='circularBackground'>
              <img alt='logo of ' src={expressjs} className='techStackLogo' id='expressLogo' />
            </div>
            <div className='circularBackground'>
              <img alt='logo of ' src={node} className='techStackLogo' id='nodeLogo' />
            </div>
            <div className='circularBackground'>
              <img alt='logo of ' src={mongo} className='techStackLogo' id='mongoLogo' />
            </div>
            <div className='circularBackground'>
              <img alt='logo of ' src={mysql} className='techStackLogo' id='mysqlLogo' />
            </div>
          </div>

          {/* app deployment */}
          <div id='deployment' className='logoSection'>
            <div className='circularBackground'>
              <img alt='logo of ' src={vercel} className='techStackLogo' id='vercelLogo' />
            </div>
            <div className='circularBackground'>
              <img alt='logo of ' src={netlify} className='techStackLogo' id='netlifyLogo' />
            </div>
            <div className='circularBackground'>
              <img alt='logo of ' src={render} className='techStackLogo' id='renderLogo' />
            </div>
          </div>

          {/* source control */}
          <div id='sourceControl' className='logoSection'>
            <div className='circularBackground'>
              <img alt='logo of ' src={git} className='techStackLogo' id='gitLogo' />
            </div>
            <div className='circularBackground'>
              <img alt='logo of ' src={github} className='techStackLogo' id='githubLogo' />
            </div>
            <div className='circularBackground'>
              <img alt='logo of ' src={gitlab} className='techStackLogo' id='gitlabLogo' />
              </div>
          </div>
          
          {/* other tools */}
          <div id='otherTools' className='logoSection'>
            <div className='circularBackground'>
              <img alt='logo of ' src={insomina} className='techStackLogo' id='insomniaLogo' />
            </div>
            <div className='circularBackground'>
              <img alt='logo of ' src={figma} className='techStackLogo' id='figmaLogo' />
            </div>
            <div className='circularBackground'>
              <img alt='logo of ' src={code} className='techStackLogo' id='codeLogo' />
            </div>
            <div className='circularBackground'>
              <img alt='logo of ' src={pycharm} className='techStackLogo' id='pycharmLogo' />
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}
