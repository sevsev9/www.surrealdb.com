$ surreal sql -e http://...
> DEFINE USER root ON ROOT PASSWORD 'StrongSecretPassword!' ROLES OWNER;

Verify you can connect to the database with the new credentials:
$ surreal sql -u root -p 'StrongSecretPassword!' -e http://...
> INFO FOR ROOT
[{ namespaces: { }, users: { root: "DEFINE USER root ON ROOT PASSHASH '...' ROLES OWNER" } }]
