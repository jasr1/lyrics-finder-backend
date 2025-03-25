# Lyrics Finder Backend
A secure and lightweight backend built with Node.js and Express that proxies requests to the Genius API without exposing your API key. This service allows frontend applications (like those hosted on GitHub Pages) to search for lyrics safely via a single `/lyrics` endpoint.


## Table of Contents

1. [About the Project](#about-the-project)

2. [Live Deployment](#live-deployment)

3. [Technologies Used](#technologies-used)

4. [Features](#features)

5. [Installation and Usage](#installation-and-usage)

6. [Project Structure](#project-structure)

7. [Security](#security)

8. [Contact](#contact)

9. [License](#license)


## About the Project

Lyrics Finder Backend serves as a secure middleware between a frontend application and the [Genius Lyrics API](https://docs.genius.com/). By handling requests server-side, it prevents exposure of your API key and simplifies lyric searching for frontend apps — ideal for projects hosted on platforms like GitHub Pages.


## Live Deployment

Check out the [live demo here](https://jasr1.github.io/lyrics-finder/) to experience the app in action.

You can access the live backend here:  
**https://lyrics-finder-backend.onrender.com**

You can use this URL in your frontend application by replacing:
```js
http://localhost:3000/lyrics?search=yourQuery
```
with:
```js
https://lyrics-finder-backend.onrender.com/lyrics?search=yourQuery
```
The service is free-tier hosted, so it may experience a brief cold start delay on the first request after inactivity.


## Technologies Used

- **Node.js**
- **Express.js**
- **Axios**
- **dotenv**
- **CORS**
- **Render** (for deployment)


## Features

- **API Key Security**: API key stored securely using environment variables.
- **CORS Enabled**: Accepts requests from any origin — useful for local or GitHub Pages frontends.
- **Proxy Requests**: Intercepts lyric search queries and forwards them to the Genius API.
- **Modular Routing**: Clean separation of route logic using Express routers.
- **Deployment Ready**: Easily deployable to any Node-compatible backend host.


## Installation and Usage

To run this project locally:

1. **Clone the repository**:
```bash
git clone https://github.com/yourusername/lyrics-finder-backend.git
cd lyrics-finder-backend
```

2. **Install dependencies**:
```
npm install
```

3. **Create a `.env` file** at the root and add your Genius API key:
```
GENIUS_API_KEY='your-genius-api-key'
```

4. **Start the server**:
```
node index.js
```

5. **Test the endpoint**: Open your browser and go to:
```
http://localhost:3000/lyrics?search=weeknd
```

## Project Structure

```
lyrics-finder-backend/
├── routes/
│   └── lyrics.js         # Route for handling /lyrics requests
├── .env                  # Environment variables (not committed)
├── .gitignore            # Ensures .env and node_modules aren't tracked
├── index.js              # Entry point of the Express server
└── package.json
```

## Security
- The genius API key is **never exposed** to the frontend.
- CORS allows all origins by default but can be restrictred in production.
- `.env` is **excluded from version control** to protect sensitive data.

## Contact

Feel free to connect with me:

- **GitHub**: [jasr1](https://github.com/jasr1)

- **LinkedIn**: [LinkedIn](https://www.linkedin.com/in/jasrandhawa-softwaredeveloper/)


Thank you for exploring this project!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.