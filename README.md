# 🖼️ Pixabay Image Gallery

The Pixabay Image Gallery is a sleek, modern image-browsing application built with React.js and Node.js. It retrieves images from the Pixabay API based on user-selected categories and provides user-friendly navigation with pagination and sorting.

🎨 🎨 🎨

## 🛠️ Built With

- [React.js](https://reactjs.org/)

- [Express.js](https://expressjs.com/)

- [Axios](https://axios-http.com/)

- [Emotion](https://emotion.sh/)

## 🌟 Features

- **Category-Based Image Fetching**: Choose a category and see related images instantly.

- **Smooth Pagination**: Navigate between pages easily with the 'Prev' and 'Next' buttons.

- **Dynamic Sorting**: Sort images by 'ID' or 'Date'.

- **Responsive Design**: Enjoy a seamless experience on any device thanks to responsive design.

## 🏗️ Project Structure

The project consists of a server and a client-side:

- **Server**: An Express.js application that handles API requests to Pixabay, performs sorting on the server-side and serves sorted images to the client application.

- **Client**: A React.js application that displays images, handles category selection, and manages pagination and sorting. Styling is done using the Emotion library.

## 🚀 Getting Started

### Prerequisites

- Node.js

- NPM

### Installation

1. Clone the repository:

```bash

git clone https://github.com/AmiramAbergel/fs-home-assignment.git

```

2. Install dependencies

```bash

   npm run install-server
   npm run install-client

```

### Running the application

1. Start the server and the client concurrently:

```bash

npm run dev

```

The client-side application will automatically connect to the live server deployed by [Render](https://fs-home-assignment.onrender.com). To connect to a local server, change the `BASE_URL` in `client/api/api.js` to your local server's URL (`http://localhost:3000/api/v1`).

## 🌐 Live Demo

Check out the live demo of the project:

- [Client Application on Netlify](https://main--flourishing-zuccutto-d4df02.netlify.app/)

- [Server Application on Render](https://fs-home-assignment.onrender.com)
