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

A new user and group are created specifically to run the application. Running the application as a non-root user helps minimize security vulnerabilities by ensuring that the application doesn’t have root privileges, which can expose the system to potential threats.

## Changing Ownership:

we temporarily switch to the root user to change the ownership of the application directory. This step ensures that the application has the necessary permissions to access and modify the files within its working directory, preventing errors such as EACCES: permission denied.

## Running as Non-Root User:

Once the necessary ownership changes are made, we switch back to the non-root user to run the application. This practice ensures that, after the initial setup, the application continues to run with limited permissions, thereby enhancing security and protecting the host system from potential vulnerabilities.

These steps ensures the host machine and the application not being taken advantage of possible vulnerabilities with root access

