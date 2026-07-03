# 🚀 Task Manager REST API

A RESTful Task Manager API built using **Node.js**, **Express.js**, and **MongoDB Atlas**. The application is containerized using **Docker**, automated with **GitHub Actions**, published to **Docker Hub**, and deployed on **AWS EC2**.

---

## 📌 Features

- Create a task
- Get all tasks
- Get a single task
- Update a task
- Delete a task
- MongoDB Atlas integration
- Dockerized application
- Docker Compose support
- GitHub Actions CI pipeline
- Docker Hub image publishing
- AWS EC2 deployment

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Docker
- Docker Compose
- Git & GitHub
- GitHub Actions
- Docker Hub
- AWS EC2
- Thunder Client (API Testing)

---

## 📂 Project Structure

```
task-manager-devops/
│
├── controllers/
│   └── taskController.js
│
├── db/
│   └── connect.js
│
├── models/
│   └── taskModel.js
│
├── routes/
│   └── taskRoutes.js
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
├── .gitignore
├── app.js
├── package.json
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/priyamvada7078/task-manager-devops.git
```

```bash
cd task-manager-devops
```

### Install Dependencies

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in the project root.

```env
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

---

## Run Locally

```bash
npm start
```

or

```bash
node app.js
```

---

## Docker

### Build Docker Image

```bash
docker build -t task-manager .
```

### Run Docker Container

```bash
docker run -d \
-p 3000:3000 \
-e MONGO_URI="your_connection_string" \
task-manager
```

---

## Docker Compose

```bash
docker compose up --build
```

---

## REST API Endpoints

| Method | Endpoint | Description |
|----------|----------------|----------------|
| GET | /tasks | Get all tasks |
| GET | /tasks/:id | Get single task |
| POST | /tasks | Create new task |
| PATCH | /tasks/:id | Update task |
| DELETE | /tasks/:id | Delete task |

---

## Sample Request

### POST /tasks

```json
{
  "title": "Learn Docker",
  "completed": false
}
```

---

## Sample Response

```json
{
  "_id": "...",
  "title": "Learn Docker",
  "completed": false
}
```

---

## CI/CD

This project uses **GitHub Actions** for Continuous Integration.

On every push to the `master` branch:

- Checkout repository
- Install dependencies
- Build Docker image

---

## Docker Hub

Docker Image:

```
priyamvada7078/task-manager
```

Pull Image

```bash
docker pull priyamvada7078/task-manager:latest
```

---

## AWS Deployment

The application is deployed on an **AWS EC2 Ubuntu Server** using Docker.

Deployment Steps:

- Launch EC2 instance
- Install Docker
- Pull Docker image from Docker Hub
- Run Docker container
- Connect to MongoDB Atlas

---

## API Testing

API endpoints were tested using **Thunder Client**.

---

## Future Improvements

- JWT Authentication
- User Login & Signup
- Role-Based Authorization
- Input Validation
- Pagination
- Search & Filter
- Swagger Documentation
- Nginx Reverse Proxy
- Automatic EC2 Deployment using GitHub Actions

---

## Author

**Priyamvada Chaudhary**

GitHub:

https://github.com/priyamvada7078

Docker Hub:

https://hub.docker.com/u/priyamvada7078

---

## License

This project is for learning purposes.
