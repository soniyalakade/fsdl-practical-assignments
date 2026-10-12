Assignment 04 – devTinder Web (React Client)

The front end of devTinder, a developer-networking app in the style of a swipe-based matching platform. Users sign up, log in, browse other developers, send or ignore connection requests, and manage their profile.

Original repository: https://github.com/soniyalakade/devTinder_web
Features
Sign up and log in (cookie-based authentication with the backend)
Feed of developer profile cards with Interested / Ignore actions
Connections page listing accepted connections
Requests page to accept or reject incoming requests
View and edit your own profile
Persistent app state with Redux (user, feed, connections, requests)
Logout and client-side routing
Technologies Used
React 19 and Vite 7
Redux Toolkit and React-Redux (state management)
React Router DOM 7 (routing)
Axios (API calls with credentials)
Tailwind CSS 4 and DaisyUI (styling)
ESLint
Project Structure
Assignment-04/
├── source-code/
│   ├── src/
│   │   ├── components/   # Login, Feed, UserCard, Connections, Requests, Profile, EditProfile, NavBar, Footer, Body
│   │   ├── utils/        # Redux store + slices, constants (API base URL)
│   │   ├── App.jsx       # Routes
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
├── output-screenshots/
└── README.md
Routes
Path	Page
/	Feed
/login	Login / Sign up
/profile	View and edit profile
/connections	Accepted connections
/requests	Received connection requests
How to Run Locally

Prerequisites: Node.js 18+. This is only the web client — it talks to the devTinder backend API, which must be running at http://localhost:7777 (the base URL is set in src/utils/constants.js).

bash
cd source-code
npm install
npm run dev

To create a production build: npm run build