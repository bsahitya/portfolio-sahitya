import { useState } from 'react';
import emailjs from '@emailjs/browser';

import images from '../../constants/images';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Sahitya',
      message: message,
    };

    const {
      VITE_EMAILJS_SERVICE_ID,
      VITE_EMAILJS_TEMPLATE_ID,
      VITE_EMAILJS_PUB_KEY,
    } = import.meta.env;

    emailjs
      .send(
        VITE_EMAILJS_SERVICE_ID,
        VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        VITE_EMAILJS_PUB_KEY
      )
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((error) => {
        console.log('Error sending email: ', error);
      });
  };

  return (
    <>
      <h2 className='head-text'>Connect with me!</h2>
      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt='email' />
          <a href='mailto:sahitya.buddharaju@gmail.com' className='p-text'>
            sahitya.buddharaju@gmail.com
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <form className='app__footer-form app__flex' onSubmit={handleSubmit}>
          <div className='app__flex'>
            <input
              type='text'
              className='p-text'
              placeholder='Your Name'
              value={name}
              onChange={handleChangeInput}
              name='name'
              required
            />
          </div>
          <div className='app__flex'>
            <input
              type='email'
              className='p-text'
              placeholder='Your Email'
              value={email}
              onChange={handleChangeInput}
              name='email'
              required
            />
          </div>
          <div>
            <textarea
              className='p-text'
              name='message'
              placeholder='Message'
              value={message}
              onChange={handleChangeInput}
              required></textarea>
          </div>
          <button className='p-text' type='submit'>
            {loading ? 'Sending' : 'Send Message'}
          </button>
        </form>
      ) : (
        <div>
          <h3 className='head-text'>Thank you for getting in touch.</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', [
  'app__whitebg',
]);
