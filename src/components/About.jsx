import React from 'react'
import '../about.css'

function About() {
  return (
    <div className='about-main'>
        <h2 className='josefin-sans'>About Me</h2>
        <h4 className='montserrat-sans'>I’m a front-end developer I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I’m based in Venezuela, but I’m happy working remotely and have experience in remote teams. I’d love you to check out my work.</h4>
        <h4 className='montserrat-sans' style={{textAlign: 'start'}}>Experience in:</h4>
        <ul className='about-experience'>
            <li>React.js, Vue.js, Angular – Development of dynamic and scalable applications.</li>
            <li>E-learning, Dashboard and graphics pages and Blogs</li>
            <li>Landing Pages and Online Stores – Integration with payment gateways and responsive design.</li>
            <li>UI/UX with Pixel Perfect & BEM – Attractive interfaces optimized for all devices.</li>
            <li>CSS (SASS, Tailwind, Grid, Flexbox) – Modern styles and efficient maintenance.</li>
            <li>Version control (Git, GitHub, GitLab, Bitbucket) – Collaborative workflow.</li>
        </ul>
    </div>
  )
}

export default About
