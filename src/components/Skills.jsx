import React from 'react'
import html from '../images/skills/HTML5.png'
import css from '../images/skills/CSS3.png'
import javascript from '../images/skills/Javascript.png'
import react from '../images/skills/React.png'
import angular from '../images/skills/Angular.png'
import vue from '../images/skills/Vue.png'
import vite from '../images/skills/Vite.png'
import materialUI from '../images/skills/MaterialUI.png'
import angularMaterial from '../images/skills/AngularMaterial.png'
import vuetify from '../images/skills/Vuetify.png'
import sass from '../images/skills/Sass.png'
import tailwind from '../images/skills/Tailwind.png'
import wordpress from '../images/skills/Wordpress.png'
import github from '../images/skills/Github.png'
import gitlab from '../images/skills/Gitlab.png'
import bitbucket from '../images/skills/Bitbucket.png'
import '../skills.css'

const skills = [
  { id: 1, img: html, name: 'HTML' },
  { id: 2, img: css, name: 'CSS' },
  { id: 3, img: javascript, name: 'Javascript' },
  { id: 4, img: react, name: 'React' },
  { id: 5, img: angular, name: 'Angular' },
  { id: 6, img: vue, name: 'Vue' },
  { id: 7, img: vite, name: 'Vite' },
  { id: 8, img: materialUI, name: 'MaterialUI' },
  { id: 9, img: angularMaterial, name: 'Angular Material' },
  { id: 10, img: vuetify, name: 'Vuetify' },
  { id: 11, img: sass, name: 'Sass' },
  { id: 12, img: tailwind, name: 'Tailwind' },
  { id: 13, img: wordpress, name: 'Wordpress' },
  { id: 14, img: github, name: 'Github' },
  { id: 15, img: gitlab, name: 'Gitlab' },
  { id: 16, img: bitbucket, name: 'Bitbucket' },
];

function Skills() {
  return (
    <div className='skills-main'>
        <h2 className='josefin-sans'>Skills</h2>
        <div className='skills-list'>
          {skills.map((skill) => (
            <div className='skill-card' key={skill.id}>
              <img src={skill.img} alt={skill.name} className='skill-img' />

              <p className='montserrat-sans skill-text'>{skill.name}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Skills
