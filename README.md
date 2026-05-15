# Developer Connector

Developer Connector is a social network application for developers. It allows developers to create a profile, share posts, and connect with other developers in the community.

## Features

- **User Authentication**: Secure registration and login system using JWT.
- **Developer Profiles**: Create and customize your professional profile with bio, skills, education, and experience.
- **GitHub Integration**: Automatically fetch and display your latest GitHub repositories on your profile.
- **Post & Feed**: Share thoughts, ask questions, and interact with posts from other developers.
- **Likes & Comments**: Engage with the community by liking and commenting on posts.
- **Responsive Design**: Fully responsive interface built with Next.js and custom CSS.

## Tech Stack

### Frontend
- **Framework**: [Next.js](https://nextjs.org/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
- **Styling**: Custom CSS & FontAwesome icons
- **Data Fetching**: Axios

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Authentication**: JSON Web Token (JWT) & Bcryptjs
- **Utilities**: Express-validator, Gravatar

## Getting Started

### Prerequisites

- Node.js installed on your machine
- MongoDB account or local instance

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd node-react-next-fullstack-dev-connector
   ```

2. **Backend Setup**
   - Navigate to the backend directory:
     ```bash
     cd backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file in the `backend` folder and add your configuration:
     ```env
     PORT=8000
     DATABASE=your_mongodb_uri
     JWT_SECRET=your_secret_key
     GITHUBCLIENTID=your_github_client_id
     GITHUBCLIENTSECRET=your_github_client_secret
     ```

3. **Frontend Setup**
   - Navigate to the client directory:
     ```bash
     cd ../client
     ```
   - Install dependencies:
     ```bash
     npm install
     ```

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd backend
   npm start
   ```
   The server will run on [http://localhost:8000](http://localhost:8000).

2. **Start the Frontend Development Server**
   ```bash
   cd client
   npm run dev
   ```
   The application will be accessible at [http://localhost:3000](http://localhost:3000).

## License

This project is licensed under the ISC License.
