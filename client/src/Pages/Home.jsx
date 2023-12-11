import React from "react";

export default function Home() {
  return (
    <div>
      <div className="px-7 py-12 max-w-7xl mx-auto content">
        <h1 className="text-3xl font-bold mb-4 text-red-500 text-center">
          Welcome To My Authentiction Website!!
        </h1>
        <p className="mb-4 text-gray-700 font-bold">
          MERN (MongoDB, Express.js, React.js, and Node.js) is a popular
          full-stack development framework that allows developers to build
          scalable and dynamic web applications. MongoDB is a NoSQL database
          that provides flexible data storage, Express.js is a backend framework
          for Node.js, React.js is a JavaScript library for building user
          interfaces, and Node.js is a JavaScript runtime environment for
          executing server-side scripts.
        </p>
        <p className="mb-4 text-gray-700 font-bold">
          Authentication is a crucial security feature that ensures only
          authorized users can access sensitive data or perform specific actions
          on a web application. In an authentication app built with MERN, the
          user registration, login, and logout functionalities are implemented
          using MongoDB to store user data, Express.js to handle server-side
          requests and responses, and React.js to render the user interface.
        </p>
        <p className="mb-4 text-gray-700 font-bold">
          User Registration: When a new user signs up, their details are stored
          in the MongoDB database using the `User` schema. The registration form
          should be created using React.js components and the registration
          process should be handled by Express.js routes.
        </p>
        <p className="mb-4 text-gray-700 font-bold">
          User Login: When a user logs in, their credentials are checked against
          the stored data in the MongoDB database using the `User` schemas
          `findOne` method. If the credentials match, a session or token is
          generated and stored in the browser or server-side storage using
          Express.js middleware like `express-session` or `jsonwebtoken`. The
          login process should be handled by Express.js routes and the login
          status should be updated in the React.js components state or context
          using Redux or Context API.
        </p>
        <p className="mb-4 text-gray-700 font-bold">
          User Logout: When a user logs out, the session or token is destroyed
          using Express.js middleware like `express-session` or `jsonwebtoken`.
          The logout process should be handled by Express.js routes and the
          login status should be updated in the React.js components state or
          context using Redux or Context API.
        </p>
        <p className="mb-4 text-gray-700 font-bold">
          User Authorization: To restrict access to certain pages or actions
          based on user authentication status, you can use middleware like
          `express-jwt` or `jsonwebtoken` to verify the session or token before
          allowing access to protected resources in Express.js routes. In
          React.js components, you can use conditional rendering based on the
          login status to display different views or messages for authenticated
          and unauthenticated users using Redux or Context APIs state or context
          updates from Express.js middleware or server-side storage updates
          during login and logout processes.
        </p>
      </div>
      <br />
    </div>
  );
}
