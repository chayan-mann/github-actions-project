# GitHub Actions CI/CD Demo with MongoDB# GitHub Actions CI/CD Demo



A **production-ready Node.js REST API** with MongoDB, demonstrating modern DevOps practices including **Docker**, **Docker Compose**, **GitHub Actions CI/CD**, and **AWS EC2 deployment**.This project demonstrates a **Node.js backend application** deployed using **GitHub Actions**, **Docker**, and **AWS EC2**. It includes a CI/CD pipeline that automates testing, building, and deploying the application.



------



## 🚀 Features## 🚀 Features



- ✅ **RESTful API** with Express.js- **Node.js Backend**: A simple Express.js server.

- ✅ **MongoDB** integration with Mongoose- **Dockerized Application**: Ensures consistent environments across development, testing, and production.

- ✅ **Docker & Docker Compose** for multi-container deployment- **CI/CD Pipeline**: Automated testing, building, and deployment using GitHub Actions.

- ✅ **CI/CD Pipeline** with GitHub Actions- **AWS EC2 Deployment**: Deploys the Dockerized application to an EC2 instance.

- ✅ **Automated Testing** with Jest & Supertest- **Unit Tests**: Includes tests for the API using `Jest` and `Supertest`.

- ✅ **AWS EC2 Deployment** with automated rollout

- ✅ **Health Checks** and error handling---

- ✅ **Environment-based configuration**



---### Prerequisites

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

```

github-actions-demo/---

├── .github/workflows/       # GitHub Actions CI/CD

│   └── deploy.yml          # Deployment pipeline## 🌐 Deployment

├── config/                  # Configuration files

│   └── database.js         # MongoDB connection### AWS EC2 Deployment

├── models/                  # Mongoose modelsThe application is deployed to an EC2 instance using Docker. The deployment script:

│   └── Task.js            # Task model1. Stops and removes any existing containers.

├── routes/                  # API routes2. Pulls the latest Docker image from Docker Hub.

│   └── tasks.js           # Task routes3. Runs the new container on port `80`.

├── tests/                   # Test files

│   └── app.test.js        # API tests### Access the Application

├── docker-compose.yml       # Multi-container setupOnce deployed, the application is accessible at the public IP of your EC2 instance.

├── Dockerfile              # Container image

├── server.js               # Express app---

├── start.js                # Server entry point

├── .env.example            # Environment template## 🛡️ Environment Variables

└── package.json            # Dependencies

```The following environment variables are used in the project:

- `PORT`: The port the server listens on (default: `8000`).

---

---

## 🏃 Quick Start



### Prerequisites## 📦 Dependencies

- **Node.js** 18+ 

- **Docker** & **Docker Compose**### Runtime

- **MongoDB** (local) OR use Docker Compose- **express**: Web framework for Node.js.



### Option 1: Docker Compose (Recommended)### Dev

- **jest**: Testing framework.

```bash- **supertest**: HTTP assertions for testing.

# Clone the repository

git clone https://github.com/chayan-mann/github-actions-project.git---

cd github-actions-demo



# Create environment file## 👨‍💻 Author

cp .env.example .env

**Chayan Mann**  

# Start all services (MongoDB + App)GitHub: [@chayanmann](https://github.com/chayanmann)

docker-compose up -d

---

# View logs

docker-compose logs -f## 📜 License



# Stop servicesThis project is licensed under the [MIT License](LICENSE).

docker-compose down
```

**Access the API**: `http://localhost:8000`

### Option 2: Local Development

```bash
# Install dependencies
npm install

# Set up environment
cp .env.example .env
# Edit .env and set MONGO_URI=mongodb://localhost:27017/github-actions-demo

# Start MongoDB (separate terminal)
mongod

# Start development server
npm run dev
```

---

## 🧪 Testing

```bash
# Run all tests
npm test

# Example output:
# PASS  tests/app.test.js
#  ✓ GET / should return welcome message (50ms)
#  ✓ GET /health should return health status (25ms)
#  ✓ 404 handler should work (15ms)
```

---

## 🐳 Docker Commands

```bash
# Build and run with Docker Compose
npm run docker:up

# Stop containers
npm run docker:down

# View logs
npm run docker:logs

# Rebuild images
npm run docker:build
```

---

## 📝 Example API Usage

### Create a Task
```bash
curl -X POST http://localhost:8000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Learn Docker Compose",
    "description": "Understand multi-container deployments",
    "priority": "high",
    "status": "in-progress"
  }'
```

### Get All Tasks
```bash
curl http://localhost:8000/api/tasks
```

### Update a Task
```bash
curl -X PUT http://localhost:8000/api/tasks/<task-id> \
  -H "Content-Type: application/json" \
  -d '{"status": "completed"}'
```

### Delete a Task
```bash
curl -X DELETE http://localhost:8000/api/tasks/<task-id>
```

---

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

## 🔧 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | `8000` |
| `NODE_ENV` | Environment | `development` |
| `MONGO_URI` | MongoDB connection string | `mongodb://mongodb:27017/github-actions-demo` |

---

## 📊 Tech Stack

- **Runtime**: Node.js 18
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Testing**: Jest + Supertest
- **Containerization**: Docker + Docker Compose
- **CI/CD**: GitHub Actions
- **Cloud**: AWS EC2
- **Registry**: Docker Hub

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

- [ ] Add authentication (JWT)
- [ ] Implement pagination
- [ ] Add data validation middleware
- [ ] Set up monitoring (Prometheus/Grafana)
- [ ] Add Redis caching
- [ ] Kubernetes deployment
- [ ] API documentation (Swagger)

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
