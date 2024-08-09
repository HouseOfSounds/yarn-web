import nodemailer from "nodemailer";

export async function sendMail(subject, fromEmail, otpText) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "thos.enterprise12@gmail.com",
      pass: "dzig hwnu iggz jexu",
    },
  });

  var mailOptions = {
    from: fromEmail,
    to: "thos.enterprise12@gmail.com",
    subject: subject,
    text: otpText,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      throw new Error(error);
    } else {
      console.log("Email Sent");
      return true;
    }
  });
}
