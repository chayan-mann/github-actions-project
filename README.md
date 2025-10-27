# GitHub Actions CI/CD Demo with MongoDB



A **production-ready Node.js REST API** with MongoDB, demonstrating modern DevOps practices including **Docker**, **Docker Compose**, **GitHub Actions CI/CD**, and **AWS EC2 deployment**.This project demonstrates a **Node.js backend application** deployed using **GitHub Actions**, **Docker**, and **AWS EC2**. It includes a CI/CD pipeline that automates testing, building, and deploying the application.



------



## 🚀 Features 



- ✅ **RESTful API** with Express.js- **Node.js Backend**: A simple Express.js server.

- ✅ **MongoDB** integration with Mongoose- **Dockerized Application**: Ensures consistent environments across development, testing, and production.

- ✅ **Docker & Docker Compose** for multi-container deployment- **CI/CD Pipeline**: Automated testing, building, and deployment using GitHub Actions.

- ✅ **CI/CD Pipeline** with GitHub Actions- **AWS EC2 Deployment**: Deploys the Dockerized application to an EC2 instance.

- ✅ **Automated Testing** with Jest & Supertest- **Unit Tests**: Includes tests for the API using `Jest` and `Supertest`.

- ✅ **AWS EC2 Deployment** with automated rollout

- ✅ **Health Checks** and error handling---

- ✅ **Environment-based configuration**



-- Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)

## 📋 API Endpoints- [Docker](https://www.docker.com/)



### General

- `GET /` - API welcome message

- `GET /health` - Health check endpoint



### Tasks

- `GET /api/tasks` - Get all tasks

- `GET /api/tasks/:id` - Get task by ID## ⚙️ CI/CD Pipeline

- `POST /api/tasks` - Create new task

- `PUT /api/tasks/:id` - Update taskThe project uses **GitHub Actions** for CI/CD. The pipeline is defined in `.github/workflows/deploy.yml`.

- `DELETE /api/tasks/:id` - Delete task

### Pipeline Steps:

---1. **Test**: Runs unit tests on Node.js versions 18 and 20.

2. **Build Docker Image**: Builds the Docker image for the application.

## 🛠️ Project Structure3. **Push to Docker Hub**: Pushes the image to Docker Hub.

4. **Deploy to EC2**: Deploys the Dockerized application to an AWS EC2 instance.









## ⚙️ CI/CD Pipeline

The project uses **GitHub Actions** for continuous integration and deployment:

### Workflow Steps:
1. **Test** → Run unit tests on Node.js 18 & 20
2. **Build** → Create Docker image tagged with commit SHA
3. **Push** → Upload image to Docker Hub
4. **Deploy** → Deploy to AWS EC2 instance

### Secrets Required:
- `DOCKERHUB_USERNAME` - Docker Hub username
- `DOCKERHUB_TOKEN` - Docker Hub access token
- `EC2_HOST` - EC2 instance public IP
- `EC2_SSH_KEY` - EC2 SSH private key

---

## 🌐 Deployment

### AWS EC2 Deployment
The application automatically deploys to EC2 on every push to `main`:

1. GitHub Actions builds Docker image
2. Pushes to Docker Hub
3. SSH into EC2 instance
4. Pulls latest image
5. Stops old container
6. Starts new container
7. Verifies deployment

### Manual Deployment
```bash
# SSH into EC2
ssh -i your-key.pem ubuntu@your-ec2-ip

# Pull and run latest image
docker pull your-username/github-actions-demo:latest
docker stop app || true
docker rm app || true
docker run -d -p 80:8000 --name app \
  -e MONGO_URI=your-mongodb-uri \
  your-username/github-actions-demo:latest
```

---



---

## 🎓 Learning Outcomes

This project demonstrates:
- ✅ Building RESTful APIs with Node.js
- ✅ Database integration with MongoDB
- ✅ Multi-container orchestration with Docker Compose
- ✅ CI/CD automation with GitHub Actions
- ✅ Cloud deployment on AWS EC2
- ✅ Environment-based configuration
- ✅ Automated testing and health checks

---

## 🚧 Future Enhancements

---

## 👨‍💻 Author

**Chayan Mann**  
GitHub: [@chayan-mann](https://github.com/chayan-mann)

---

## 📄 License

This project is licensed under the ISC License.

---

## 🙏 Acknowledgments

Built to demonstrate modern DevOps practices and cloud-native application development.
