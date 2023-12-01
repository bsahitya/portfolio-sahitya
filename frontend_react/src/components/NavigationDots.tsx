import { Pages } from '../constants/constants';

const NavigationDots = ({ active }: { active: string }) => {
  return (
    <div className='app__navigation'>
      {Pages.map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className='app__navigation-dot'
          style={active === item ? { backgroundColor: '#313BAC' } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
