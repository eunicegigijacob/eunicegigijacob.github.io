import devwallet from '../assets/devWallet.png';
import ajo from '../assets/Ajo.png';
import Gigis from '../assets/Gigi.png';

const ProjectSection = () => {
  return (
    <section id="projects">
      <div className="title">
        <h2>my projects</h2>
      </div>

      <div className="box">
        <div className="card" data-aos="fade-up" data-aos-delay="300">
          <div className="image">
            <a href="https://github.com/eunicegigijacob/Dev-wallet">
              <img src={devwallet} alt="A screenshot of the project" />
            </a>
          </div>
          <div className="project-details">
            <h5>
              Dev Wal<span>let</span>
            </h5>
            <div className="write-up">
              <p className="project-description">
                Built using Html, Css, and javascript, node js express, mysql
                datababase, sequelize ORM and many other packages, etc..
              </p>
              <p className="project-links">
                <a href="#" className="link-arrow">
                  Coming soon...
                  {/* <i class="ri-arrow-right-up-line"></i> */}
                </a>
                <a
                  href="https://github.com/eunicegigijacob/Dev-wallet"
                  className="link-arrow"
                >
                  Github repo
                  {/* <i class="ri-arrow-right-up-line"></i> */}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="card" data-aos="fade-up" data-aos-delay="300">
          <div className="image">
            <a href="#">
              <img src={Gigis} id="gigiLogo" />
            </a>
          </div>
          <div className="project-details">
            <h5>
              Gigi's Car Show<span>Room</span>
            </h5>
            <div className="write-up">
              <p className="project-description">
                An e-commerce site built using Html, CSS, Javascript, Node js,
                Express MongoDB, Mongoose ODM, Ejs, etc.
              </p>
              <p>
                <a href="#" className="link-arrow">
                  Coming Soon....
                  {/* <i class="ri-arrow-right-up-line"></i> */}
                </a>
                <a
                  href="https://github.com/eunicegigijacob/showroom-backend"
                  className="link-arrow"
                >
                  Github repo
                  {/* <i class="ri-arrow-right-up-line"></i> */}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="card" data-aos="fade-up" data-aos-delay="300">
          <div className="image">
            <a href="https://ajo-personal.netlify.app/">
              <img src={ajo} alt="ajo logo" />
            </a>
          </div>
          <div className="project-details">
            <h5>
              Ajo: Helping Individuals Build<span>Wealth</span>
            </h5>
            <div className="write-up">
              <p className="project-description">
                Ajo is a web application that provides an innovative solution
                for group savings for SMEs and individuals.
              </p>
              <p>
                <a
                  href="https://ajo-personal.netlify.app/"
                  className="link-arrow"
                >
                  live Demo
                  {/* <i class="ri-arrow-right-up-line"></i> */}
                </a>
                <a
                  href="https://github.com/eunicegigijacob/ajo-personal-"
                  className="link-arrow"
                >
                  Github repo
                  {/* <i class="ri-arrow-right-up-line"></i> */}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
