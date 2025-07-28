const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to parse POST data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (after login)
app.use('/public', express.static(path.join(__dirname, 'public')));

// Login page
app.get('/', (req, res) => {
    res.send(`
        <form method="POST" action="/login" style="text-align:center; margin-top:100px;">
            <h2>Please Login</h2>
            <input type="text" name="username" placeholder="Username" required /><br/><br/>
            <input type="password" name="password" placeholder="Password" required /><br/><br/>
            <button type="submit">Login</button>
        </form>
    `);
});

// Login logic
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === 'charger' && password === 'doormat') {
        res.redirect('/public/index.html');
    } else {
        res.send('<h2>Access Denied. <a href="/">Try Again</a></h2>');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
