<p align="center">
  <img src="https://github.com/user-attachments/assets/d206e06e-b2d7-48bd-a95d-3ece381f614d" width="100" alt="Node.js icon"/>
</p>

<h1 align="center">REST API–BASED NODE.JS APPLICATION</h1>
<h4 align="center">BUILT WITH NODE.JS & EXPRESS, POWERED BY MONGODB</h4>

<p align="center">
  <img src="https://github.com/user-attachments/assets/2e29c618-a80c-4a01-b789-6894c2f733a5" width="47"/>&nbsp;&nbsp;&nbsp;
  <img src="https://github.com/user-attachments/assets/bca437f9-b1e8-4071-8479-af550c5bb20d" width="110"/>&nbsp;&nbsp;
  <img src="https://github.com/user-attachments/assets/db7f405c-a41a-489a-8f20-774fa0ab8736" width="47"/>
</p>

<h4 align="center">DOCKERIZED, KUBERNETES-ORCHESTRATED, AUTOMATED WITH GITHUB ACTIONS & ARGO CD</h4>

<p align="center">
  <img src="https://github.com/user-attachments/assets/0c521d77-d9ec-4bb4-a155-ff94212a52ad" height="55"/>&nbsp;&nbsp;&nbsp;
  <img src="https://github.com/user-attachments/assets/db1ff3a4-914e-458a-b2cf-722550bf8914" height="50"/>&nbsp;&nbsp;&nbsp;
  <img src="https://github.com/user-attachments/assets/3251b06b-16f5-43db-a4ec-ed3bc700ea39" height="48"/>&nbsp;&nbsp;&nbsp;
  <img src="https://github.com/user-attachments/assets/7d9462f8-097d-4675-9e89-7e3963d3ab59" height="50"/>
</p>

---

A complete end-to-end DevOps setup featuring a production-ready Node.js REST API with MongoDB, built with Express for clean routing and robust user and notes CRUD operations. The application is containerized using Docker, orchestrated with Kubernetes for scalable deployment, and fully automated through GitHub Actions and Argo CD for continuous integration and GitOps-based continuous delivery.

## 📑 Table of Contents

* [⚡ Application Features](#-application-features)
* [🧩 DevOps & Infrastructure Features](#-devops--infrastructure-features)
* [📈 How It Works](#-how-it-works)
* [🔧 Tech Stack](#-tech-stack)
* [📁 Project Structure](#-project-structure)
* [⚙ Setup & Installation](#-setup--installation)
* [📡 How to Test APIs](#-how-to-test-apis)
* [🐳 Docker Setup (Optional)](#-docker-setup-optional)
* [☸️ Kubernetes Deployment (Optional)](#️-kubernetes-deployment-optional)
* [🌀 GitOps with Argo CD (Optional)](#-gitops-with-argo-cd-optional)
* [🤖 GitHub Actions & Automated Docker Builds (Optional)](#-github-actions--automated-docker-builds-optional)
* [👤 Created By](#-created-by)
* [📝 License](#-license)

---

## ⚡ Application Features

| Feature                      | Description                                                                                 |
| ---------------------------- | ------------------------------------------------------------------------------------------- |
| **User Management**          | Create, read, update, and delete users using the User schema (`name`, `email`, `password`). |
| **Notes Management**         | Full CRUD operations for notes (title, subject, content) linked to a user via `userId`.     |
| **Express-Based Routing**    | Organized and modular REST API built using Express.                                         |
| **Secure Password Handling** | Passwords hashed using **bcrypt** before storage.                                           |
| **MongoDB Integration**      | Mongoose ODM used for schema creation, validation, and database operations.                 |
| **Environment-Based Config** | MongoDB URI injected via environment variables (Docker + Kubernetes config).                |
| **Timestamps for Records**   | Auto-maintained `createdAt` and `updatedAt` fields via Mongoose.                            |

## 🧩 DevOps & Infrastructure Features

| Feature                           | Description                                                                                      |
| --------------------------------- | ------------------------------------------------------------------------------------------------ |
| **Dockerized Application**        | Node.js API and MongoDB services containerized using `Dockerfile` and `docker-compose`.          |
| **Kubernetes Deployment**         | Separate deployments for the API and MongoDB with replica sets and service exposure.             |
| **Scalability**                   | API scaled with `replicas: 3` for balanced workload handling.                                    |
| **MongoDB as Stateful Component** | Kubernetes volume (`emptyDir` for now) attached to MongoDB container.                            |
| **GitHub Actions CI Pipeline**    | Automatic Docker image build and push to Docker Hub on every `main` branch commit.               |
| **Argo CD GitOps Delivery**       | Automatic Kubernetes updates using `automated`, `selfHeal`, and `prune` policies.                |
| **Auto Deployment Sync**          | Argo CD continuously watches Git repo for new manifests.                                         |
| **Docker Hub Integration**        | CI pipeline logs in and pushes images through secrets (`DOCKERHUB_USERNAME`, `DOCKERHUB_TOKEN`). |

---

## 📈 How It Works
The screenshot below shows the Argo CD UI for this application. It illustrates how the automation works, connecting the Node.js API, MongoDB, and multiple pods. Argo CD ensures continuous delivery, automatically syncing changes and managing the deployment across all containers and pods.

| Overview of Argo CD Automation                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------ |
| <p align="center"><img src="https://github.com/user-attachments/assets/679a0021-3287-48f1-bb9f-a5a9cdf85610" width="800"></p>  |

---

## 🔧 Tech Stack
The following technologies are used in this project:

| Component        | Technology                         | Description                                   |
| ---------------- | ---------------------------------- | --------------------------------------------- |
| Backend API      | Node.js, Express, Bcrypt           | Handles API requests and user/note operations |
| Database         | MongoDB, Mongoose                  | Stores application data                       |
| Containerization | Docker                             | Packages the app into containers              |
| Orchestration    | Kubernetes (Deployments, Services) | Manages app deployment and scaling            |
| GitOps           | Argo CD                            | Automates deployment from Git repository      |
| CI/CD            | GitHub Actions                     | Builds and pushes Docker images automatically |
| Registry         | Docker Hub                         | Stores Docker images for deployment           |

---

## 📁 Project Structure
The following project structure is used in this project:

```
node-api-docker-kubernetes-argocd/
│
├── .github/                        # GitHub Actions workflows for Docker image build         
│   └── workflows/
│       └── build-docker.yaml
│
├── argocd/                         # Argo CD GitOps configuration
│   └── application.yaml
│
├── k8s/                            # Kubernetes manifests
│   ├── node-api-deployment.yaml
│   ├── node-api-service.yaml
│   ├── mongo-deployment.yaml
│   └── mongo-service.yaml
│
├── node_modules/                 
│
├── src/                            # REST API application source code
│   ├── main/
│   │   └── app.js
│   ├── models/
│   │   ├── User.js
│   │   └── Note.js
│   ├── controllers/
│   │   ├── userController.js
│   │   └── noteController.js
│   ├── routes/
│   │   ├── userRoutes.js
│   │   └── noteRoutes.js
│   └── config/
│       └── db.js
│
├── .dockerignore
├── .gitignore
├── Dockerfile
├── docker-compose.yml
├── LICENSE
├── README.md
├── server.js
└── package.json
```

---

## ⚙ Setup & Installation
Follow these steps to run the project locally using Docker:

#### 1. ✅ Clone the Repository

```bash
git clone https://github.com/PAIshanMadusha/node-api-docker-kubernetes-argocd.git
```

#### 2. ✅ Navigate to the Project Directory

```bash
cd node-api-docker-kubernetes-argocd
```

#### 3. ▶️ Run the Docker Compose File
This project can run locally with Docker. Make sure you have **Docker Desktop (or Docker Engine)** running on your system.

```bash
docker-compose up --build
```

#### 4. ⚡ Successful Startup Output
If everything is configured correctly, check each container's logs in Docker Desktop or your terminal. You should see output similar to:

```console
MongoDB Connected Successfully!
Server is running on http://localhost:3000
Node API running on pod: {docker-hostname}
```

#### 🌐 Test the App: Visit: **[http://localhost:3000](http://localhost:3000)**

---

## 📡 How to Test APIs
You can test the APIs using **Postman**, **Insomnia**, or any other API testing tool.

| **Service**       | **URI**       | **Method**         | **Request Body Example**                                                                    |
| ----------------- | ------------- | ------------------ | ------------------------------------------------------------------------------------------- |
| **User Endpoint** | `/users`      | POST / GET         | `{ "name": "test", "email": "test@test.com", "password": "test" }`                          |
| **User Endpoint** | `/users/{id}` | GET / PUT / DELETE | N/A                                                                                         |
| **Note Endpoint** | `/notes`      | POST / GET         | `{ "title": "test", "subject": "test", "content": "test", "userId": "{existing-user-id}" }` |
| **Note Endpoint** | `/notes/{id}` | GET / PUT / DELETE | N/A                                                                                         |

> * Use the base URL: `http://localhost:3000` for local testing.
> * Replace `{id}` with the actual user or note ID when performing GET, PUT, or DELETE requests.

---

## 🐳 Docker Setup (Optional)
These steps allow you to build your own Docker image or pull the pre-built image for testing with Kubernetes and Argo CD.
> **Official Docker Image:** `ishanmadusha/node-api-docker-kubernetes-argocd:latest`

#### 📥 Pull the latest image (optional)

```bash
docker pull ishanmadusha/node-api-docker-kubernetes-argocd:latest
```

#### 1. ✅ Build Your Own Docker Image
##### If you want to build a custom image, update the image name inside: `node-api-docker-kubernetes-argocd/k8s/node-api-deployment.yaml`

```bash
docker build -t <your-username>/node-api-docker-kubernetes-argocd:latest .
```

#### 2. ✅ Push Your Image to Docker Hub

```bash
docker push <your-username>/node-api-docker-kubernetes-argocd:latest
```

---

## ☸️ Kubernetes Deployment (Optional)
Before deploying, make sure **Minikube** is installed and running: 👉 [https://minikube.sigs.k8s.io/docs](https://minikube.sigs.k8s.io/docs)

#### 🔍 Components in `node-api-docker-kubernetes-argocd/k8s/`

| File                     | Description                                       |
| ------------------------ | ------------------------------------------------- |
| node-api-deployment.yaml | Node API Deployment (3 replicas)                  |
| node-api-service.yaml    | NodePort Service exposing port **32000**          |
| mongo-deployment.yaml    | MongoDB Deployment with persistent volume         |
| mongo-service.yaml       | ClusterIP Service for internal MongoDB connection |

#### 1. ✅ Apply All Kubernetes Manifests

```bash
kubectl apply -f k8s/
```

#### 2. ✅ Access the Node API (Port-Forward Method)

```bash
kubectl port-forward svc/node-api-docker-kubernetes-argocd 3000:3000
```

---

## 🌀 GitOps with Argo CD (Optional)
Install Argo CD on Minikube and configure it to automate Kubernetes deployments, Learn more: [https://argo-cd.readthedocs.io/en/stable](https://argo-cd.readthedocs.io/en/stable)

#### 1. ✅ Apply the Argo CD Application Configuration

##### The file `argocd/application.yaml` is responsible for automatically syncing Kubernetes with your GitHub repository, Apply the config:

```bash
kubectl apply -f argocd/application.yaml -n argocd
```

##### Make sure you update your GitHub repository URL inside the file: `node-api-docker-kubernetes-argocd/argocd/application.yaml`

#### 🗺️ After applying, Argo CD will:
##### * Track your GitHub repository as the *source of truth*
##### * Identify any updates to YAML manifests or image tags
##### * Fetch the newest Docker images built by GitHub Actions
##### * Apply all changes to the Kubernetes cluster without manual steps

---

## 🤖 GitHub Actions & Automated Docker Builds (Optional)
A CI/CD pipeline is included to **build and push the Docker image automatically** whenever changes are pushed to the `main` branch.

#### 🔄 How the Pipeline Works
##### * The repository is checked out for the latest changes.
##### * GitHub Actions authenticates with Docker Hub via secure GitHub Secrets.
##### * A new Docker image is built from the updated source code.
##### * The freshly built image is pushed to Docker Hub with the `latest` tag.

#### 🔁 What This Achieves
##### * Eliminates the need for manual image builds or pushes.
##### * Ensures every commit to `main` produces a new container image.
##### * Argo CD continuously syncs the cluster, deploying changes automatically.
##### * Provides a fully automated and reliable CI/CD + GitOps workflow.

---

### 👤 Created By
**Ishan Madhusha**  
GitHub: [PAIshanMadusha](https://github.com/PAIshanMadusha)  

Feel free to explore my work and reach out if you'd like to collaborate! 🚀

---

## 📝 License
This project is licensed under the MIT License.  
See the [LICENSE](LICENSE) file for more details.
