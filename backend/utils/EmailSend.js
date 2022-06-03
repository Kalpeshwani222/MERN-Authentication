const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.API_KEY);

const sendmail = async (msg) => {
  try {
    await sgMail.send(msg);
    console.log("message send success");
  } catch (error) {
    console.log(error);
    if (error.response) {
      console.error(error.response.body);
    }
  }
};

module.exports = sendmail;
