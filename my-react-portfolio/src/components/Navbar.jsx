import TwitterFill from 'remixicon-react/TwitterFillIcon';
import LinkedinFillIcon from 'remixicon-react/LinkedinFillIcon';
import GithubFillIcon from 'remixicon-react/GithubFillIcon';
import MenuFillIcon from 'remixicon-react/MenuFillIcon';

const Navbar = () => {
  const HandleDropdown = () => {
    if (navbar.style.display === 'none') {
      navbar.style.display = 'initial';
    } else {
      navbar.style.display = 'none';
    }

    window.onscroll = () => {
      navbar.style.display = 'none';
    };
  };

  return (
    <nav>
      <h2 className="logo">
        Portfo<span>lio</span>
      </h2>

      <ul className="navbar" id="navbar">
        <li>
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li>
          <a className="nav-link" href="#projects">
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="nav-link" href="#contact">
            Contact
          </a>
        </li>
      </ul>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/eunice-jacob-6a0840252/">
          <LinkedinFillIcon size="1.2em" />
        </a>
        <a href="https://twitter.com/e_unicej">
          <TwitterFill size="1.3em" />
        </a>
        <a href="https://github.com/eunicegigijacob">
          <GithubFillIcon size="1.3em" />
        </a>
      </div>
      <a className="menu-bar">
        <MenuFillIcon onClick={HandleDropdown} />
      </a>
    </nav>
  );
};

export default Navbar;
