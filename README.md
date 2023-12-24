# Work Buddy client

Work Buddy client is a responsive front-end React application developed using Vite, offering a user-friendly interface for efficient collaboration data analysis. The application seamlessly integrates with a Java Spring Boot backend for handling file uploads and retrieving collaboration results. Additionally, it supports optional storage of CSV files in a PostgreSQL database.

## Features

- **File Upload**: Drag and drop or select CSV file for uploading.
- **File Management**: Remove selected file and display file details.
- **Configuration Options**: Specify whether the file has a header and choose to store the file.
- **Upload to Backend**: Utilizes a Java Spring Boot backend for processing file uploads.
- **Longest Collaboration Data**: Retrieve the longest collaborating pair from the csv file.
- **Date Support**: Provides support for all ISO date formats.

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Svetlioo/work-buddy-client.git
   ```

2. **Install dependancies:**

   ```bash
   npm install
   ```

3. **Run the project:**

   ```bash
   npm run dev
   ```

## Functionality Overview

### Fetching Longest Collaboration Data

To fetch the longest collaborating pair, the length in days and the projects they collaborated on from the backend, follow these steps:

1. Ensure that a file has been successfully uploaded.
2. Look for the "Press to get the longest" button.
3. Click the button, and the application will retrieve and display the longest collaboration data.

### Handling Dates in CSV Files

This project is designed to handle CSV files with various date formats. Whether your dates are in ISO format, MM/DD/YYYY, DD-MM-YYYY, or any other common format, the application will process them seamlessly.

### Backend Integration

This front-end project is specifically built to work in conjunction with a Java Spring Boot backend. Make sure to set up and run the backend at [http://localhost:8080](http://localhost:8080) for complete functionality.

### File Upload to Backend

The file upload process sends the selected CSV file to the backend for processing. The backend URL for file upload is set to `http://localhost:8080/api/upload`. Ensure that the backend is configured to handle file uploads at this endpoint.

### Configurable Options

- **Has Header Checkbox:**
  - Check this box if the CSV file contains a header row.
- **Store File Checkbox:**
  - Check this box if you want to store the uploaded file.

## Responsive Design

The Work Buddy application is built with a responsive design, ensuring a seamless user experience across various devices and screen sizes. Whether you're accessing the application on a desktop, tablet, or smartphone, the interface adapts dynamically to provide optimal usability. The responsive design ensures that users can interact with Work Buddy comfortably, regardless of the device they are using.

## Dependencies

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [react-dropzone](https://react-dropzone.js.org/)
- [react-toastify](https://fkhadra.github.io/react-toastify/)
- [CSS Modules](https://github.com/css-modules/css-modules)

## License

Author is Svetoslav Iliev.
