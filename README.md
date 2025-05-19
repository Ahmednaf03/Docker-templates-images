# Docker-templates-images
 Pre made fully configured docker templates for React based application stack such as MERN vite Next

Clone it and use it on the fly 

## Pre Req ;
Docker installed Locally CLI or GUI based on preference 
nodejs for Run-Time

to Build the image and run the container 
Docker compose up --build / this command will spin up the image and create container utilising the compose yaml file 

## Clone using the following command 

```bash 
git clone https://github.com/Ahmednaf03/Docker-templates-images

```
## Vite Docker Template 

  I have provided both manual dockerized react+vite application and automated leveraging compose file

  command for manual one 
```bash 
  docker build -t docker-vite
  docker run -p 5174:5174 vite-docker-manual 
``` 

if the container already exists 

```bash 
  docker start vite-docker-manual
```

for building via compose file 

```bash 
docker compose up --build
```

for running and using compose watch for FS

```bash
 docker compose up 
 docker compose watch
 ```

 note: ensure you are in the correct file directory 
## MERN Docker template 

   in the case of an mern application we have to provide dockerfile for both frontend and the backend we tie and/or automate them together in the compose file and for the db i have leveraged the global mongo image locally establishing the db is also possible 

## Nextjs Docker template 
   
   Nextjs is pretty straightforward just as MERN dedicated services can be defined inside the compose file along with their build context and their dockerfile location in case of server actions no seperate service needed

## Concurrent edit from host to container 
  
   this can be acheived one of two ways number one manually creating an volume and attaching it to the root of our container the code is 

```bash
docker create volume project_name node_modules

docker build -t Project_name 

docker run -p 3000:3000 -v $(pwd):/app -v node_modules:/app/node_modules project_name
```
or we can create it in compose file itself

2nd and desired way is using docker compose watch which is also implemented in all of the above

# Security Best Practices
For best practice, I have implemented several security measures to ensure the application runs with the appropriate permissions and to mitigate potential risks. Here's an overview of the measures:

## Creating a Non-Root User:

A new user and group are created specifically to run the application. Running the application as a non-root user helps minimize security vulnerabilities by ensuring that the application doesn’t have root privileges, which can expose the system to potential threats.

## Changing Ownership:

we temporarily switch to the root user to change the ownership of the application directory. This step ensures that the application has the necessary permissions to access and modify the files within its working directory, preventing errors such as EACCES: permission denied.

## Running as Non-Root User:

Once the necessary ownership changes are made, we switch back to the non-root user to run the application. This practice ensures that, after the initial setup, the application continues to run with limited permissions, thereby enhancing security and protecting the host system from potential vulnerabilities.

These steps ensures the host machine and the application not being taken advantage of possible vulnerabilities with root access

## Ubuntu is still experimental!!
   i am trying ways to emulate an ubuntu container into an fully functinal virtual machine 

