import {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <div data-aos="fade-left" data-aos-delay="0" data-aos-duration="800" >Animated content</div>
    </div>
  )
}

export default App
