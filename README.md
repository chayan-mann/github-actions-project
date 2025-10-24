# GitHub Actions CI/CD Demo

This project demonstrates a **Node.js backend application** deployed using **GitHub Actions**, **Docker**, and **AWS EC2**. It includes a CI/CD pipeline that automates testing, building, and deploying the application.

---

## 🚀 Features

- **Node.js Backend**: A simple Express.js server.
- **Dockerized Application**: Ensures consistent environments across development, testing, and production.
- **CI/CD Pipeline**: Automated testing, building, and deployment using GitHub Actions.
- **AWS EC2 Deployment**: Deploys the Dockerized application to an EC2 instance.
- **Unit Tests**: Includes tests for the API using `Jest` and `Supertest`.

---


### Prerequisites
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Docker](https://www.docker.com/)







## ⚙️ CI/CD Pipeline

The project uses **GitHub Actions** for CI/CD. The pipeline is defined in `.github/workflows/deploy.yml`.

### Pipeline Steps:
1. **Test**: Runs unit tests on Node.js versions 18 and 20.
2. **Build Docker Image**: Builds the Docker image for the application.
3. **Push to Docker Hub**: Pushes the image to Docker Hub.
4. **Deploy to EC2**: Deploys the Dockerized application to an AWS EC2 instance.

---

## 🌐 Deployment

### AWS EC2 Deployment
The application is deployed to an EC2 instance using Docker. The deployment script:
1. Stops and removes any existing containers.
2. Pulls the latest Docker image from Docker Hub.
3. Runs the new container on port `80`.

### Access the Application
Once deployed, the application is accessible at the public IP of your EC2 instance.

---

## 🛡️ Environment Variables

The following environment variables are used in the project:
- `PORT`: The port the server listens on (default: `8000`).

---


## 📦 Dependencies

### Runtime
- **express**: Web framework for Node.js.

### Dev
- **jest**: Testing framework.
- **supertest**: HTTP assertions for testing.

---


## 👨‍💻 Author

**Chayan Mann**  
GitHub: [@chayanmann](https://github.com/chayanmann)

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).
