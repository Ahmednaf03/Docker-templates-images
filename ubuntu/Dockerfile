# Use Ubuntu as the base image
FROM ubuntu:latest

# Set the working directory inside the container
WORKDIR /home/user

# Install basic utilities (optional)
RUN apt-get update && apt-get install -y nano vim

# Default command to keep container running
CMD ["/bin/bash"]
