const navbar = document.getElementById('navbar');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const messageField = document.getElementById('message');
const subjectField = document.getElementById('subject');

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

const submitBtn = document.getElementById('submit-btn');
submitBtn.onclick = () => {
  if (
    emailField.value !== '' &&
    nameField.value !== '' &&
    messageField.value !== '' &&
    subjectField.value !== ''
  ) {
    sendMail();
  }
};

function sendMail() {
  console.log('called');
  var params = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
    subject: document.getElementById('subject').value,
  };
  const serviceId = 'service_91zz552';

  const templateId = 'template_v1qocpc';

  emailjs
    .send(serviceId, templateId, params)
    .then((res) => {
      nameField.value = '';
      emailField.value = '';
      messageField.value = '';
      subjectField.value = '';
      console.log(res);
      alert('Your message has been sent successfully');
    })
    .catch((err) => console.log(err));
}
