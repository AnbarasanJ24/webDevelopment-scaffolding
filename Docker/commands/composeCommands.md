# Docker Compose Commands
Run & Build all containers      => docker-compose up -d
Run & Re-Build all containers   => docker-compose up -d -build
Stop all containers             => docker-compose down
All running containers          => docker-compose ps 

# Test commands
Run docker-compose and run test => docker-compose up
                                => docker exec -it containerId npm run test (Second terminal)