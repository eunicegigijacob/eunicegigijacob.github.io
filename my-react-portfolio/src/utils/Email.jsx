import emailjs from 'emailjs-com';

Export.sendmail = (name, email, message) => {
  const templateId = process.env.REACT_APP_TEMPLATE_ID;
  const serviceId = process.env.REACT_APP_SERVICE_ID;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;

  emailjs.sendForm(serviceId, templateId, {
    from_name: name,
    from_email: email,
    message: message,
  });
};
