# Wanderlust - Airbnb Inspired Project

Airbnb project learning progress.

Wanderlust is an Airbnb-inspired web application where users can explore and manage property listings.
This project was built while learning full-stack web development using **Node.js, Express, MongoDB, and EJS**.

---

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* EJS
* HTML & CSS

---

## Features

* View all property listings
* View individual listing details
* Create new listings
* Edit existing listings
* Update listing information
* Delete listings

This phase implements **full CRUD functionality** for listings.

---

## Routes

| Method | Route              | Description                |
| ------ | ------------------ | -------------------------- |
| GET    | /listings          | Show all listings          |
| GET    | /listings/new      | Form to create new listing |
| POST   | /listings          | Create new listing         |
| GET    | /listings/:id      | Show listing details       |
| GET    | /listings/:id/edit | Edit listing form          |
| PUT    | /listings/:id      | Update listing             |
| DELETE | /listings/:id      | Delete listing             |

---

## Project Structure

```
Airbnb-project
│
├── models
│   └── listing.js
│
├── views
│   └── listings
│       ├── index.ejs
│       ├── show.ejs
│       ├── new.ejs
│       └── edit.ejs
│
├── app.js
├── package.json
├── package-lock.json
└── .gitignore
```

---

## Installation

Clone the repository:

```
git clone https://github.com/navee-d18/Wanderlust-Airbnb-project.git
```

Install dependencies:

```
npm install
```

Run the server:

```
node app.js
```

Open in browser:

```
http://localhost:8080/listings
```

---

## Author

Md Naveed
