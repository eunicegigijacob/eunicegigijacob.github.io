const navbar = document.getElementById('navbar');

const menu = document.getElementById('menu-bar');
menu.onclick = () => {
  if (navbar.style.display === 'none') {
    navbar.style.display = 'initial';
  } else {
    navbar.style.display = 'none';
  }

  window.onscroll = () => {
    navbar.style.display = 'none';
  };
};
