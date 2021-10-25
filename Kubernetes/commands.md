# Kubectl commands
1. Apply config files                   => kubectl apply -f filename (pods, service objects yaml)
2. Get object info                      => kubectl get objectType (Ex: kunectl get pods/services)
3. Details information about objects    => kubectl describe objectType objectName (Ex: kubectl describe pods client-pod )
4. Delete all objects                   => kubectl delete objectType --all (Object Types=> pods, services)
5. Delete single object                 => kubectl delete -f object filename (Ex: kubectl delete -g client-pod.yaml)
6. Get Pods IP address                  => kubectl get pods -o wide 
7. To update image                      => kubectl set image <ObjectType>/<ObjectName> ContainerName = new Image Name
                                           kubectl set image Deployment/client-deployment client=anbarasan/multi-client:v2