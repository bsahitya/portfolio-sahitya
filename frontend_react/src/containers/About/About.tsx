import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import './About.scss';
import { client, urlFor } from '../../client';
import { AboutEntity } from '../../constants/interfaces';
import { AppWrap, MotionWrap } from '../../wrapper';

const About = () => {
  const [abouts, setAbouts] = useState([] as AboutEntity[]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data: AboutEntity[]) => setAbouts(data));
  }, []);

  return (
    <>
      <h2 className='head-text'>
        Simple <span>sells, </span>
        Simple is<span> usable</span>
        <br />& Simple
        <span> scales</span>
      </h2>
      <h4 className='head-text-author'>&#8212; Rand Fishkin</h4>

      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profile-item'
            key={about.title + index}>
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: '20px' }}>
              {about.title}
            </h2>
            <p className='p-text' style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(About, 'app__about'), 'about', [
  'app__whitebg',
]);
