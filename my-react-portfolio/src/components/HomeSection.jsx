import AOS from 'aos';
import 'aos/dist/aos.css';

const HomeSection = () => {
  return (
    <div className="content">
      <h4 data-aos="fade-up">Hello, my name is</h4>
      <h1 data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
        JACOB EUNICE <span className="block">GIGI</span>{' '}
      </h1>
      <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
        fullstack developer.
      </p>
      <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
        i enjoy using code to solve real life problems and building user
        friendly web apps
      </p>
      <a
        href="#projects"
        className="btn"
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="800"
      >
        Explore My Work
      </a>
    </div>
  );
};

export default HomeSection;
