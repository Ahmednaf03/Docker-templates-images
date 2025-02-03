# Docker-templates-images
 Pre made fully configured docker templates for React based application stack such as MERN vite Next

Clone it and use it on the fly 

Pre Req ;
Docker installed Locally CLI or GUI based on preference 
nodejs for Run-Time

to Build the image and run the container 
Docker compose up --build / this command will spin up the image and create container utilising the compose yaml file 

Or fully manual Approach 
Docker build -t {Project_name} /spin up the image based on the docker file 
Docker run -p {designated port on the container}:{the port we wanna listen on host} 
-v"(pwd):/app" -v /app/node_modules {project_name} / -v declares volumes we create a volume based on root dir and mount it to the root of container for concurrent changes
                                                         same for node_modules 

# Security Best Practices
For best practice, I have implemented several security measures to ensure the application runs with the appropriate permissions and to mitigate potential risks. Here's an overview of the measures:

## Creating a Non-Root User:

A new user and group are created specifically to run the application. This practice ensures that the application doesn't run with root privileges, which can expose the system to security vulnerabilities.

## Changing Ownership:

The ownership of the application directory is changed to the newly created user. This step ensures that the application has the necessary permissions to access and modify the files within its working directory.

## Running as Non-Root User:

The application is configured to run as the non-root user. By avoiding running the application as root, we reduce the risk of exploiting vulnerabilities that could grant unauthorized access to the host system.

These steps ensures the host machine and the application not being taken advantage of possible vulnerabilities with root access

