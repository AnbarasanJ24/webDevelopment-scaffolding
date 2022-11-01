# Image commands

<<<<<<< HEAD
Pull Image                 => docker pull imageName:tag Ex: docker pull nginx:latest
Run Image                  => docker run -d --restart=always -p localHostPort:applicationPort --name newContainerName imageName:tag
                              Ex:docker run -d --restart=always -p 8080:80 --name aws-nest-demo-container aws-nest-demo:latest
Docker Run                 => (Docker run => Docker create + start)
                              docker create imageName:tage return conatiner id 
                              docker start -a conatinerIddocker run -d -port 8000:80 --name nginxContainer nginx:latest
Build Image                => docker build -t imagename:tag .
Build Image with File name => docker build -f Dockerfile.dev || docker build -f Dockerfile (For Production)
=======
Pull Image                       => docker pull imageName:tag Ex: docker pull nginx:latest
Run Image                        => docker run -d -port localHostPort:applicationPort --name newContainerName imageName:tag
                                    Ex:docker run -d -port 8000:80 --name nginxContainer nginx:latest
Docker Run                       => docker create imageName:tage return conatiner id (Docker run => Docker create + start)
                                    docker start -a conatinerId
Build Image                      => docker build -t imagename:tag .
Build Image with File name       => Docker build -t imagename:tag . -f Dockerfile.dev || -f Dockerfile (For Production)
>>>>>>> f7d2d47 (Minor Changes)

# container commands

<<<<<<< HEAD
Start/Restart container    => docker start containerId/Name
Stop container             => docker stop containerId/name
Display all conatiner      => docker container ls or docker ps -a
Logs                       => docker logs conatinerId/name 
Excecute Other commands    => docker exec -it containerId/Name sh/bash/zh/powershell
                              docker run -it -d -p localHostPort:applicationPort --name newContainerName imageName:tag sh(zh/bash/powershell)
Override commands          => docker run imageName:tag npm run test
=======
Start/Restart container          => docker start containerId/Name
Stop container                   => docker stop containerId/name
Logs                             => docker logs conatinerId/name 
Display all conatiner            => docker container ls or docker ps -a
Excecute Other commands          => docker exec -it containerId/Name sh/bash/zh/powershell
                                    docker run -it -d -p localHostPort:applicationPort --name newContainerName imageName:tag sh(zh/bash/powershell)
Override commands                => docker run imageName:tag npm run test
>>>>>>> f7d2d47 (Minor Changes)

All conatiner Id                => docker ps -aq
Delete Stopped container        => docker rm $(docker ps -aq)
Clear all container with cache  => docker system prune -a

# Create Volume
Volume b/w Host & container      => docker run -d -p 8080:80 --name containerName -v $(pwd):usr/app/share:ro
Volume b/w containers            => docker run -d -p 8080:80 --name conatinerName --volumes-from-sourceContainerName

# Push to Docker Hub
<<<<<<< HEAD
Login     => docker login (username: anbarasan24)
Commit    => docker tag imageName username/imagename:tag
Push      => docker push  username/imagename:tag   
=======
Login                            => docker login (username: anbarasan24)
Commit                           => docker commit containerName username/dockerHubName:tag
Push                             => docker push  username/dockerHubName:tag   
>>>>>>> f7d2d47 (Minor Changes)

