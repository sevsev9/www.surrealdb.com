$ surreal sql --conn 'http://localhost:8000' --user root --pass surrealdb
> USE NS ns DB db;

ns/db> CREATE record;
{ id: record:wbd69kmc81l4fbee7pit }
ns/db> CREATE record;
{ id: record:vnyfsr22ovhmmtcm5y1t }
ns/db> CREATE record;
{ id: record:se49petzb7c4bc7yge0z }
ns/db> SELECT * FROM record;
[{ id: record:se49petzb7c4bc7yge0z }, { id: record:vnyfsr22ovhmmtcm5y1t }, { id: record:wbd69kmc81l4fbee7pit }]
ns/db>
