$ kubectl logs -f deployments/surrealdb-tikv
2023-06-06T08:07:47.982960Z  INFO surrealdb::env: Running 1.0.0-beta.9+20230401.c3773b2 for linux on aarch64
2023-06-06T08:07:47.982988Z  INFO surrealdb::iam: Root authentication is enabled
2023-06-06T08:07:47.982990Z  INFO surrealdb::iam: Root username is 'root'
2023-06-06T08:07:47.982991Z  INFO surrealdb::dbs: Database strict mode is disabled
2023-06-06T08:07:47.983023Z  INFO surrealdb::kvs: Connecting to kvs store at tikv://basic-pd.tikv:2379
2023-06-06T08:07:47.999548Z  INFO surrealdb::kvs: Connected to kvs store at tikv://basic-pd.tikv:2379
2023-06-06T08:07:47.999667Z  INFO surrealdb::net: Starting web server on 0.0.0.0:8000
2023-06-06T08:07:47.999758Z  INFO surrealdb::net: Started web server on 0.0.0.0:8000
2023-06-06T08:07:48.617919Z  INFO surrealdb::net: 10.244.0.1:49264 GET /health HTTP/1.1 200 "kube-probe/1.27" 1.238584ms
