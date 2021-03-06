const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'gmailUser Email', // gmail 계정 아이디를 입력
    pass: 'gmailUser PWD', // gmail 계정의 비밀번호를 입력
  },
});

const mailOptions = {
  from: 'gmailUser Email', // 발송 메일 주소 (위에서 작성한 gmail 계정 아이디)
  to: 'User Email', // 수신 메일 주소
  subject: 'Sending Email using Node.js', // 제목
  text: 'That was easy!', // 내용
};

function isValidEmail(email) {
    // eslint-disable-next-line
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

transporter.sendMail(mailOptions, (error, info) => {
  if (!isValidEmail(mailOptions.from) || !isValidEmail(mailOptions.to)) {
    console.log(mailOptions);
    return;
  }

  if (error) {
    console.log(error);
  } else {
    console.log(`Email sent: ${info.response}`);
  }
});

module.exports.isValidEmail = isValidEmail;