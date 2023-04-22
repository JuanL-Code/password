const http = require('http');

function generatePassword() {
   var length = 12,
       charset = 
"@#$&*0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$&*0123456789abcdefghijklmnopqrstuvwxyz",
       password = "";
   for (var i = 0, n = charset.length; i < length; ++i) {
       password += charset.charAt(Math.floor(Math.random() * n));
   }
   return password;
}

const server = http.createServer((req, res) => {
    res.end(`
    <!doctype html>
    <html>
    <head>
        <link rel="stylesheet" href="styles.css">
        <style>
            *{
                margin: 0;
                padding: 0;
                font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
            }

            body {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                background-color: #222831;
            }
            
            .container {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                background-color: #EEEEEE;
                border-radius: 25px;
                padding: 0 20px;
                box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
            }
            
            h1 {
                text-align: center;
                font-size: 28px;
                margin-top: 30px;
            }
            h2 {
                background-color: white;
                padding: 0 50px;
                text-align: center;
                margin: 20px 0 30px 0;
                font-weight: normal;
                border-radius: 8px;
                box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
            }
            button {
                font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
                cursor: pointer;
                color: white;
                margin-bottom: 30px;
                border: none;
                height: 30px;
                width: 200px;
                background-color: #00ADB5;
                border-radius: 8px;
                transition: ease 0.2s;
                font-size: 16px;
            }
            button:hover {
                background-color: #393E46;
                transition: ease 0.2s;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Random Password Generator</h1>
            <h2>${generatePassword()}</h2>
            <form action="/">
                <button>Generate New Password</button>
            </form>
        </div>
    </body>
     `);
});

server.listen(3000, () => {
   console.log("lishing on http://localhost:3000");
});