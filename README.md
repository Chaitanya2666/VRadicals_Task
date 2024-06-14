# Book Store Project - VRadicals_Task

## Overview

This is a simple Book Store application built using Node.js, Express, MongoDB, and EJS. It allows users to perform CRUD (Create, Read, Update, Delete) operations on a collection of books.

## Features

- **Add a Book**: Users can add a new book to the store.
- **Update a Book**: Users can update details of an existing book.
- **Delete a Book**: Users can delete a book from the store.
- **View Books**: Users can view a list of all books in the store.

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Chaitanya2666/VRadicals_Task

   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**
   Create a `.env` file in the root directory and add the following variables:

   ```
   PORT && Mongo_URL
   ```

4. **Start the Application**
   ```
   npm start
   ```

## Usage

1. **Open the Application**

   - Navigate to `http://localhost:PORT` in your web browser.

2. **Add a Book**

   - Click on the "Add Book" button.
   - Fill in the details in the modal form and click "Save".

3. **Update a Book**

   - Click on the "Update" button next to the book you want to update.
   - Modify the details in the modal form and click "Update".

4. **Delete a Book**
   - Click on the "Delete" button next to the book you want to delete.
   - Confirm the deletion in the form.

## Buttons

- **Add Button**
  - Triggers a modal where you can enter details for a new book.
- **Update Button**
  - Triggers a modal pre-filled with the selected book's details, allowing you to update them.
- **Delete Button**
  - Submits a request to delete the selected book from the store.

## Project Structure

```
.
├── controller
│   └── book.js
├── model
│   └── DB.js
├── Route
│   └── books.js
├── views
│   ├── home.ejs
│   ├── pices
│   │   ├── Addbutton.ejs
│   │   ├── Bootcss.ejs
│   │   ├── table.ejs
│   │   └── script.ejs
├── .env
├── app.js
├── package.json
└── README.md
```

## How to Start

1. Clone the repository
2. Install dependencies using `npm install`
3. Set up the environment variables in a `.env` file
4. Start the application using `npm start`
5. Open `http://localhost:PORT` in your browser to use the application

## Conclusion

This project provides a simple and intuitive interface for managing a collection of books, allowing users to add, update, view, and delete book entries. Adjust the code and configurations as needed to fit your specific use case and requirements.

Thanks
Chaitanya Sharma
Email- Chaitanyasharma266@gmail.com
