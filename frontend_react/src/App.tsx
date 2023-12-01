import { About, Footer, Header, Skills, Testimonial } from './containers';
import { Navbar } from './components';

import './App.scss';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
