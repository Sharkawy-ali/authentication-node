const express = require('express');
const crypto = require('crypto');
const app = express();

app.use(express.json());

// Define your NFC password here
const NFC_PASSWORD = '123';

app.post('/authenticate', (req, res) => {
    const { password } = req.body;
    
    if (password === NFC_PASSWORD) {
        const token = crypto.randomBytes(16).toString('hex');  // Generate a random token
        res.json({ success: true, token });  // Send the token back to the client
    } else {
        res.json({ success: false });
    }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
