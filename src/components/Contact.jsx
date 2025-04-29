import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faUpwork, faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import '../contact.css';
import '../styles.css';

function Contact() {
  return (
    <div className='contact-main'>
        <div>
            <h2 className='josefin-sans' style={{textAlign: 'left'}}>Drop me a message</h2>
            <h4 className='montserrat-sans' style={{color: 'white', maxWidth: '500px', textAlign: 'left'}}>Do you have a project in mind or need help?<br/><br/>
            Leave me a message and I'll get back to you as soon as possible. I'm here to help you take your ideas to the next level.
            I am happy to help you with your professional project, write to me!</h4>
        </div>
        <Box
        component="form"
        className='contact-box'
        sx={{ '& > :not(style)': {margin:'10px 0', width: '100%' } }}
        noValidate
        autoComplete="off"
        >
        <TextField id="filled-basic" label="Name" variant="filled" placeholder='Name Example'/>
        <TextField id="filled-basic" label="Mail" variant="filled" placeholder='nameExample@gmail.com'/>
        <TextField
            id="filled-multiline-static"
            label="Message"
            multiline
            rows={4}
            placeholder="How can I help?"
            variant="filled"
            />
        <Button className='contact-button' variant="contained">Send message</Button>
        </Box>
    </div>
  )
}

export default Contact
