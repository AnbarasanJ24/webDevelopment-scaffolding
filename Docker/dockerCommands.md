# Image commands

Pull Image                       => docker pull imageName:tag Ex: docker pull nginx:latest
Run Image                        => docker run -d -port localHostPort:applicationPort --name newContainerName imageName:tag
                                    Ex:docker run -d -port 8000:80 --name nginxContainer nginx:latest
Docker Run                       => docker create imageName:tage return conatiner id (Docker run => Docker create + start)
                                    docker start -a conatinerId
Build Image                      => docker build -t imagename:tag .
Build Image with File name       => Docker build -t imagename:tag . -f Dockerfile.dev || -f Dockerfile (For Production)

# container commands

Start/Restart container          => docker start containerId/Name
Stop container                   => docker stop containerId/name
Logs                             => docker logs conatinerId/name 
Display all conatiner            => docker container ls or docker ps -a
Excecute Other commands          => docker exec -it containerId/Name sh/bash/zh/powershell
                                    docker run -it -d -p localHostPort:applicationPort --name newContainerName imageName:tag sh(zh/bash/powershell)
Override commands                => docker run imageName:tag npm run test

All conatiner Id                => docker ps -aq
Delete Stopped container        => docker rm $(docker ps -aq)
Clear all container with cache  => docker system prune -a

# Create Volume
Volume b/w Host & container      => docker run -d -p 8080:80 --name containerName -v $(pwd):usr/app/share:ro
Volume b/w containers            => docker run -d -p 8080:80 --name conatinerName --volumes-from-sourceContainerName

# Push to Docker Hub
Login                            => docker login (username: anbarasan24)
Commit                           => docker commit containerName username/dockerHubName:tag
Push                             => docker push  username/dockerHubName:tag   

