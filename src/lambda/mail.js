const sgMail = require('@sendgrid/mail'),
{ SENDGRID_API_KEY, SENDGRID_TO_EMAIL } = process.env

exports.handler =  async (event, context, callback) => {
    var payload = {}, body, msg;
    ('?'+event.body).replace(/[?&]+([^=&]+)=([^&]*)/gi, (m,key,value)=>{
        payload[key]=value;
    });
    var { email, subject } = payload;
    //sgMail.setApiKey(SENDGRID_API_KEY)
    body = Object.keys(payload).map(k => `${k}: ${payload[k]}`).join("<br><br>");
    msg = {
        to: SENDGRID_TO_EMAIL,
        from: email,
        subject: subject || 'Contact Form Submission',
        html: body,
    };
    //try{
        //await sgMail.send(msg)
        
        //return {statusCode: 200, body: "Message sent"}
    //} catch(e){
        return {statusCode: 200, body: JSON.stringify([payload, msg])}
    //}
};