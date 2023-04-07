import Skills from './Skills';

const AboutSection = () => {
  return (
    <section id="about">
      <div data-aos="fade-up" className="main">
        <div className="about-text">
          <h2>about me</h2>
          <h5>
            fullstack<span> developer</span>
          </h5>
          <p>
            Hi there, I'm Eunice Jacob Gigi – a passionate and talented
            full-stack JavaScript developer. I've always been fascinated by
            technology and have a keen eye for detail, which helps me to excel
            in front-end and back-end development.
          </p>
          <p>
            In my experience, I've worked with modern JavaScript frameworks like
            React, Node.js, and Express.js. I've also had the opportunity to
            work on personal projects that showcase my skills in developing
            dynamic web applications. I take pride in my innovative
            problem-solving skills, which has helped me grow and be a valuable
            member of every team I am apart of.
          </p>
          <p>
            What sets me apart is my excellent communication and collaboration
            skills, which make me an excellent team player. I'm dedicated to
            producing high-quality code, and I'm always eager to learn and
            improve. My strong work ethic drives me to continuously develop my
            skills and knowledge. Beyond my technical expertise, I'm an open and
            approachable person who loves sharing my passion for coding with
            others. I find joy in collaborating with others in the industry and
            learning from them.
          </p>
          <p>
            In summary, I'm a talented and dedicated full-stack JavaScript
            developer who is passionate about making a difference in the
            industry. I bring a fresh perspective and an infectious passion to
            any team, making me a valuable addition to any development project.
          </p>
        </div>

        <Skills />

        <a href="#" className="btn">
          {' '}
          Download CV
        </a>
        <a href="#contact" className="btn">
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default AboutSection;
