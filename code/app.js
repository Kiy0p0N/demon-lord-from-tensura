import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';

const app = express();
const port = 3000;
const URL_API = 'http://localhost:4000';  // API base URL

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));  // Serve static files from 'public' directory

let demonLord;

// Route to fetch a random demon and render it in the index view
app.get('/', async (req, res) => {
    if (!demonLord) {
        try {
            const response = await axios.get(`${URL_API}/random`);
            demonLord = response.data;
            res.render('index.ejs', {
                demon: demonLord  // Pass the demon data to the view
            });
            demonLord = null;
        } catch (error) {
            console.log(error.status);
            res.status(500).send("Error retrieving data.");
        }
    } else {
        res.render('index.ejs', {
            demon: demonLord,
        });
        demonLord = null;
    }
});

// Route to fetch the next demon based on the current demon's ID
app.get('/next/:id', async (req, res) => {
    try {
        const response = await axios.get(`${URL_API}/next/${req.params.id}`);
        demonLord = response.data;
        res.redirect("/");
    } catch (error) {
        console.log(error);
        res.status(500).send("Error retrieving data.");
    }
});

// Route to fetch the previous demon based on the current demon's ID
app.get('/previous/:id', async (req, res) => {
    try {
        const response = await axios.get(`${URL_API}/previous/${req.params.id}`);
        demonLord = response.data;
        res.redirect("/");
    } catch (error) {
        console.log(error.status);
        res.status(500).send("Error retrieving data.");
    }
});

// Start the server and listen on the defined port
app.listen(port, () => {
    console.log(`Running on port ${port}`);
});