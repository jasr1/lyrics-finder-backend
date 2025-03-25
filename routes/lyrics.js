const express = require('express');
const axios = require('axios');
require('dotenv').config();
const router = express.Router();

const geniusKey = process.env.GENIUS_API_KEY;

router.get('/', async (req, res) => {
    try {
        const response = await axios.get(`https://api.genius.com/search?q=${req.query.search}&access_token=${geniusKey}`)
        res.json(response.data);
    }
    catch (err) {
        res.status(500).send('Error');
    }
});

module.exports = router;