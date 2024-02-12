# Project Structure

project-root/
│
├── recruitment/
│   ├── public/
│   │   └── index.html
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── Auth/
│   │   │   │   ├── Login.js
│   │   │   │   └── Signup.js
│   │   │   │
│   │   │   ├── Chat/
│   │   │   │   └── ChatInterface.js
│   │   │   │
│   │   │   ├── Home/
│   │   │   │   └── Home.js
│   │   │   │
│   │   │   ├── Navigation/
│   │   │   │   └── SideMenu.js
│   │   │   │
│   │   │   ├── Profile/
│   │   │   │   └── ProfileForm.js
│   │   │   │
│   │   │   └── Workflow/
│   │   │       └── WorkflowVisualization.js
│   │   │
│   │   ├── App.js
│   │   └── index.js
│   │
│   ├── package.json
│   └── package-lock.json
│
└── server/
    ├── config/
    │   └── db.js
    ├── data/
    │   └── mockData.js
    ├── models/
    │   ├── Profile.js
│   │   └── User.js
    ├── routes/
    │   ├── chat.js
    |   ├── profile.js
    |   ├── steps.js
    |   └── User.js
    |   
    ├── index.js
    ├── package.json
    └── package-lock.json


## Frontend

 frontend of the application is built using React, and it is organized into components based on functionality. Each component is responsible for a specific part of the user interface.

## Backend

The backend of the application is built using Node.js and Express.js. It includes routes for handling API requests, models for interacting with the database, and other necessary functionality.

## Getting Started

To run the application locally, follow these steps:

1. Clone this repository.
2. Navigate to the `recuriment` directory and run `npm install` to install frontend dependencies.
3. Navigate to the `server` directory and run `npm install` to install backend dependencies.
4. Start the backend server by running `npm start` in the `server` directory.
5. Start the frontend development server by running `npm start` in the `client` directory.
6. Access the application in your web browser at `http://localhost:3000`.

## Technologies Used

- Frontend: React, React Router, Tailwind CSS
- Backend: Node.js, Express.js, MongoDB (or other database of choice)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.



video-link:   https://drive.google.com/file/d/1vGlLnPbAA_fzRC4_qg7giCZqiXMQ61yF/view?usp=sharing
