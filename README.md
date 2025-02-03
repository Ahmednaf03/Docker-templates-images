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

