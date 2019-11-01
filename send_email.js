module.exports = (from,to,sub,text) => {
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey('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');
  const msg = {
    to: to,
    from: from,
    subject: sub,
    text: text,

  };
  sgMail.send(msg);

}
