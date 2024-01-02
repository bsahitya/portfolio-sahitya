import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a href='https://www.linkedin.com/in/sahityab' target='_blank'>
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href='https://github.com/bsahitya' target='_blank'>
          <BsGithub />
        </a>
      </div>
      <div>
        <a href='https://www.instagram.com/sahityabuddharaju/' target='_blank'>
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
