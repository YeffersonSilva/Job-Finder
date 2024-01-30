# Job Finder

## Description
**Job Finder** is a web application designed to connect job-seeking professionals with employment opportunities. This platform enables users to explore, filter, and apply to various job listings posted by companies across different sectors and industries.

## Features
- **Job Exploration**: Users can search for job listings based on keywords, location, and category.
- **Applications**: Professionals can directly apply to job listings through the platform.
- **Job Posting**: Companies can post job opportunities, specifying details like job description, requirements, and how to apply.
- **Notifications**: Real-time notifications to alert users about new job opportunities or updates on their applications.

## Technologies Used
- Backend: Node.js, Express
- Frontend: Handlebars for templates, CSS, JavaScript
- Database: MySQL
- Additional Tools: Sequelize ORM, Nodemon for development

## Local Setup
To run **Job Finder** on your local environment, follow these steps:

1. **Clone the Repository**
git clone https://github.com/YeffersonSilva/Job-Finder.git

2. **Install Dependencies**
cd Job-Finder
npm install

3. **Database Configuration**
- Ensure MySQL is installed and running.
- Create a database for the project.
- Configure your database credentials in `./db/connection.js`.

4. **Run the Application**
npm run dev

This will start the server on `localhost:3000` (or whichever port you have configured).

## Contributing
If you're interested in contributing to **Job Finder**, please read `CONTRIBUTING.md` for more information on how to do so. We welcome any form of contribution, from bug fixes to new features.

## License
This project is licensed under the MIT License. See the `LICENSE` file for more details.
