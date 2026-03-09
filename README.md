# Wanderlust - Airbnb Inspired Project

Wanderlust is an Airbnb-inspired web application where users can explore and manage property listings.
This project is built while learning full-stack web development using Node.js, Express, MongoDB, and EJS.

---

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* EJS
* Bootstrap
* HTML & CSS

---

## Features Implemented

### Listings CRUD

* View all property listings
* View individual listing details
* Create new listings
* Edit existing listings
* Update listing information
* Delete listings

### UI Features

* Responsive Navbar
* Footer section
* Layout system using **EJS-Mate**
* Styled index page using **Bootstrap**
* Static assets using **Express public folder**
* Styled New Listing form using **Bootstrap**
* Styled Edit Listing Form using **Bootstrap**

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
Wanderlust-Airbnb-project
│
├── public
│   └── css
│       └── style.css
│
├── views
│   ├── includes
│   │   ├── navbar.ejs
│   │   └── footer.ejs
│   │
│   ├── layouts
│   │   └── boilerplate.ejs
│   │
│   └── listings
│       ├── index.ejs
│       ├── show.ejs
│       ├── new.ejs
│       └── edit.ejs
│
├── models
│   └── listing.js
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
