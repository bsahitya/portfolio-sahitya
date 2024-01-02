import { useEffect, useState } from 'react';
import './Skills.scss';
import { motion } from 'framer-motion';
import { client, urlFor } from '../../client';
import { Experience, Skill, Work } from '../../constants/interfaces';
import { Tooltip } from 'react-tooltip';
import { AppWrap, MotionWrap } from '../../wrapper';

const Skills = () => {
  const [experience, setExperience] = useState([] as Experience[]);
  const [skills, setSkills] = useState([] as Skill[]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data: Experience[]) => {
      data.sort((a, b) => Number(a.year) - Number(b.year));
      setExperience(data);
    });

    client.fetch(skillsQuery).then((data: Skill[]) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className='head-text'>Skills & Experience</h2>
      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills?.map((skill) => (
            <motion.div
              key={skill.name}
              className='app__skills-item app__flex'
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}>
              <div
                className='app__flex'
                style={{ backgroundColor: skill.bgColor }}>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className='app__skills-exp'>
          {experience?.map((experience: Experience) => (
            <motion.div className='app__skills-exp-item' key={experience.year}>
              <div className='app__skills-exp-year'>
                <p className='bold-text'>{experience.year}</p>
              </div>
              <motion.div className='app__skills-exp-works'>
                {experience.works.map((work: Work) => (
                  <>
                    <motion.div
                      key={work.name}
                      className='app__skills-exp-work'
                      data-tooltip-id={work.name}
                      data-tooltip-content={work.desc}
                      data-tooltip-place='top'
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}>
                      <h4 className='bold-text'>{work.name}</h4>
                      <p className='p-text'>{work.company}</p>
                    </motion.div>
                    <Tooltip
                      id={work.name}
                      arrowColor='#fff'
                      className='skills-tooltip'
                    />
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Skills, 'app__skills'), 'skills', [
  'app__primary',
]);
