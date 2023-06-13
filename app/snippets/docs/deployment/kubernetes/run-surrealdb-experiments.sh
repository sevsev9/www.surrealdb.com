$ kubectl get pod
NAME                              READY   STATUS    RESTARTS   AGE
surrealdb-tikv-7488f6f654-lsrwp   1/1     Running   0          13m
$ kubectl delete pod surrealdb-tikv-7488f6f654-lsrwp
pod "surrealdb-tikv-7488f6f654-lsrwp" deleted
$ kubectl get pod
NAME                              READY   STATUS    RESTARTS   AGE
surrealdb-tikv-7488f6f654-bnkjz   1/1     Running   0          4s
