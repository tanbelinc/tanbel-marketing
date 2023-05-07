import axios from "axios";

const url =
  "https://us-central1-wecycleprod.cloudfunctions.net/widgets/sendemail";

export const sendMail = ({ name, email, message }) => {
  return axios({
    method: "post",
    url,
    data: {
      to: "welcome@wecycle.io, kb.tanvir@gmail.com, afsarzahin@gmail.com",
      subject: "Message from Tanbel",
      html: template({ name, email, message }),
    },
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true,
    },
  });
};

const template = ({ name, email, message }) => {
  return `
        <html>
            <head>
                <style>
                    * {
                        text-align: center;
                        font-family: "inter"
                    }
                    
                    body {
                        background-color: #efefef
                    }
                    
                    .container {
                        display: grid;
                        background-color: white;
                        max-width: 800px;
                        margin: 40px auto;
                        padding-bottom: 40px;
                        border-radius: 10px;      
                        border: 0.5px solid black;
                    }
                    
                    .message {
                        background-color: #4F45E4;
                        color: white;
                        padding: 10px;
                    }
                    
                    .logo {
                        color: #4F45E4;
                        font-size: 30px;
                        font-weight: 800;
                        margin-bottom: 0px;
                    }
                    
                    .username {
                        color: #4F45E4;
                        font-weight: 800;
                    }
                    
                    .subtitle {
                        color: grey
                    }
                    
                    .action{
                        margin-top: 40px;
                    }
                    
                    a {
                        text-decoration: none;
                        background-color: #4F45E4;
                        color: white !important;
                        border: none;
                        padding: 10px 20px;
                        border-radius: 5px;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                <p class="logo">Tenbel inc.</p>
                <p class="subtitle"><span class="username">${name}</span> have sent you message from tanbel</p>
                <div class="message">
                    <p>${message}</p>
                </div>
                <div class="action">
                    <a href="mailto:${email}?Subject=Tanbel - Thanks for Chatting in" target="_top">Reply</a>
                </div>
                </div>
            </body>
        </html>
        `;
};
