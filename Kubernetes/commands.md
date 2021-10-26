# Kubectl commands
1. Apply config files                   => kubectl apply -f filename (pods, service objects yaml)
2. Get object info                      => kubectl get objectType (Ex: kunectl get pods/services)
3. Details information about objects    => kubectl describe objectType objectName (Ex: kubectl describe pods client-pod )
4. Delete all objects                   => kubectl delete objectType --all (Object Types=> pods, services)
5. Delete single object                 => kubectl delete -f object filename (Ex: kubectl delete -g client-pod.yaml)
6. Get Pods IP address                  => kubectl get pods -o wide 
7. To update image                      => kubectl set image <ObjectType>/<ObjectName> ContainerName = new Image Name
                                        kubectl set image Deployment/client-deployment client=anbarasan/multi-client:v2
8. Map local & VM Docker client         => eval $(minikube docker-env) 
9. Get all from Pod                     => kubectl logs (PodName in CMD) EX: kubectl logs client-deployment-7cb6c958f7-cmh5b
9. Execute command inside a Pod         => kubectl exec -it (PodName in CMD) sh 
                                        EX: kubectl exec -it client-deployment-7cb6c958f7-cmh5b sh