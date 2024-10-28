const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.post('/generate-cv', (req, res) => { 
    const formData = req.body; 
    const cvContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Generated CV</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: #f5f5f5;
                    padding: 20px;
                }
                .cv-container {
                    max-width: 600px;
                    width: 100%;
                    background-color: #fff;
                    border-radius: 8px;
                    padding: 20px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }
                h1 {
                    text-align: center;
                    color: #4CAF50;
                    font-size: 2em;
                }
                p {
                    margin: 10px 0;
                    font-size: 1.1em;
                }
                strong {
                    color: #333;
                }
            </style>
        </head>
        <body>
            <div class="cv-container">
                <h1>Your CV</h1>
                <p><strong>Name:</strong> ${formData.name}</p>
                <p><strong>Email:</strong> ${formData.email}</p>
                <p><strong>Address:</strong> ${formData.adress}</p>
                <p><strong>Phone:</strong> ${formData.phone}</p>
                <p><strong>Experience:</strong> ${formData.experience}</p>
            </div>
        </body>
        </html>
    `;
    res.send(cvContent); 
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
