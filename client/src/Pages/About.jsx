import React from "react";

export default function About() {
  return (
    <div className="px-4 py-12 max-w-4xl mx-auto content">
      <h1 className="text-3xl font-bold mb-4 text-yellow-700">About Us</h1>
      <p className="mb-4 text-violet-800">
        MERN (MongoDB, Express.js, React.js, and Node.js) is a popular
        full-stack JavaScript development framework. It allows developers to
        build scalable and dynamic web applications using a single JavaScript
        technology stack.
      </p>
      <p className="mb-4 text-violet-800">
        In a MERN authentication app, the user authentication process involves
        verifying the users credentials (such as email and password) against a
        secure database (MongoDB) using Node.js and Express.js. Once the user is
        authenticated, a secure session is created, and the user is granted
        access to protected resources using middleware in Express.js.
      </p>
      <p className="mb-4 text-violet-800">
        React.js is used to create the user interface, which can be easily
        customized and updated without requiring a server restart. The apps
        frontend is connected to the backend through APIs, which allow for
        seamless communication between the client and server.{" "}
      </p>
      <p className="mb-4 text-violet-800">
        Authentication app developers can use MERN to build secure and scalable
        web applications with features such as user registration, login,
        password reset, email verification, and social media integration. They
        can also implement advanced security measures such as two-factor
        authentication, session management, and password hashing to ensure user
        data is protected.
      </p>
    </div>
  );
}
