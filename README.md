ArmaniBlog

A responsive blog web application built with Node.js, Express.js, and EJS.

🚀 Live Demo

"Visit ArmaniBlog" (https://armaniblog-project-production.up.railway.app)

💻 GitHub Repository

This repository contains the complete source code for ArmaniBlog.

✨ Features

- Create blog posts
- View blog posts
- Edit blog posts
- Delete blog posts
- Responsive design for desktop and mobile
- Server-side rendering with EJS

🛠️ Technologies Used

- Node.js
- Express.js
- EJS
- HTML
- CSS
- JavaScript

📌 About

ArmaniBlog was developed as a capstone project to demonstrate practical skills in Node.js, Express.js, EJS, routing, templating, and responsive web design.
I used Express.js to create the web server and handle the different routes in the application.

EJS was used as the templating engine to generate dynamic HTML pages. Blog posts are stored in a JavaScript array while the application is running.

The application uses CRUD operations:

- Create – Users can create new blog posts.
- Read – Users can view all posts and individual posts.
- Update – Users can edit existing posts.
- Delete – Users can remove posts.

I created separate EJS pages for the home page, creating posts, editing posts, viewing individual posts, and handling 404 errors.

CSS was then added to create a clean and responsive user interface that works on both desktop and mobile devices.

Project Structure

ArmaniBlog/
│
├── public/
│   └── styles.css
│
├── views/
│   ├── index.ejs
│   ├── create.ejs
│   ├── edit.ejs
│   ├── post.ejs
│   └── 404.ejs
│
├── app.js
├── package.json
└── package-lock.json

Installation

Clone the repository:

git clone YOUR_GITHUB_REPOSITORY_URL

Navigate into the project:

cd ArmaniBlog

Install the dependencies:

npm install

Start the server:

node app.js

Open your browser and visit:

http://localhost:3000

Important Note

This version of ArmaniBlog does not use a database. Blog posts are stored in memory using a JavaScript array.

Therefore, posts will be lost when the server is restarted.

Future Improvements

Some improvements I could add in the future include:

- Add a database such as PostgreSQL or MongoDB
- Add user authentication
- Add categories and tags
- Add image uploads
- Add comments
- Add search functionality
- Add pagination
- Deploy the application online

Author - Korletey Maurice 

Built as part of my web development learning journey.
