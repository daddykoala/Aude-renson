import React,{useRef} from 'react';
import emailjs from '@emailjs/browser';
//import PropTypes from 'prop-types';
import { HiOutlineMail } from 'react-icons/hi';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import './contactStyles.scss';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {e.preventDefault();
  
      emailjs.sendForm('service_33beam3', 'template_3rsl1bz', form.current, '4SZ6ZUnbvRVNec90_')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };


return (
    <section id="contact">
        <h5>Restons en contact</h5>
        <h2>Contactez moi</h2>
        <div className="container__contact container">
            <div className="contact__options">
                <article className="contact__option">
                    <HiOutlineMail/>
                    <h4>Email</h4>
                    <h5>aude_renson_@hotmail.com</h5>
                    <a href="mailto:aude_renson@hotmail.com" target='_blank'>Envoyez moi un message</a>
                </article>
                <article className="contact__option">
                    <RiMessengerLine/>
                    <h4>Messenger</h4>
                    <h5>Aude Renson</h5>
                    <a href="https://m.me/cle.cle.7731247" target='_blank'>Envoyez moi un message</a>
                </article>
                <article className="contact__option">
                    <BsWhatsapp/>
                    <h4>Whatsapp</h4>
                    <h5>0624350068</h5>
                    <a href="https://wa.me/+33624350068" target='_blank'>Envoyez moi un message</a>
                </article>
            </div>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='name' placeholder='Votre nom' required />
                <input type="text" name='email' placeholder='Votre email' required />
                <textarea name="message"  cols="30" rows="10" placeholder='Votre message'></textarea>
                <button className='btn btn-primary' >Envoyez votre message</button>
            </form>
        </div>
    </section>
);
}
//contact.propTypes = {};

//contact.defaultProps = {};

export default React.memo(Contact);