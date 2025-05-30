import emailjs from '@emailjs/browser';

const SERVICE_ID  = "service_w3pn6lm";
const TEMPLATE_ID = "template_vun9ms6";
const PUBLIC_KEY  = "QO6c-CriK3s0fkkp5";

export const handleOnSubmit = (e) => {
    e.preventDefault();

    let service_id  = SERVICE_ID;
    let template_id = TEMPLATE_ID;
    let public_key  = PUBLIC_KEY;

    emailjs.sendForm(service_id, template_id, e.target, public_key)
      .then((result) => {
        alert('Message Sent Successfully')
      }, (error) => {
        console.log(error.text);
        alert('Something went wrong!')
      });
    e.target.reset()
};
