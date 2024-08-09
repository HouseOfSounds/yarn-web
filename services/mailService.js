import nodemailer from "nodemailer";

export async function sendMail(subject, fromEmail, otpText) {
  var transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "thos.enterprise12@gmail.com",
      pass: "dzig hwnu iggz jexu",
    },
    secure: true,
  });
  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });

  var mailOptions = {
    from: fromEmail,
    to: "thos.enterprise12@gmail.com",
    subject: subject,
    text: otpText,
  };

  // transporter.sendMail(mailOptions, function (error, info) {
  //   if (error) {
  //     throw new Error(error);
  //   } else {
  //     console.log("Email Sent");
  //     return true;
  //   }
  // });
  await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });
}
