$ kubectl get -n tikv svc/basic-pd
NAME       TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)    AGE
basic-pd   ClusterIP   10.96.208.25   <none>        2379/TCP   10h

$ export TIKV_URL=tikv://basic-pd.tikv:2379
