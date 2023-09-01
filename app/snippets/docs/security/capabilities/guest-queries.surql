// Prepare tables with custom PERMISSIONS
test/test> DEFINE TABLE protected PERMISSIONS NONE;
test/test> DEFINE TABLE public PERMISSIONS FULL;

// When guest access is allowed
$ surreal start --allow-guests

test/test> CREATE public;
[{ id: public:uy0qzy31v4xox8vivrd4 }]

test/test> SELECT * FROM public;
[{ id: public:uy0qzy31v4xox8vivrd4 }]

test/test> CREATE protected;
[]

test/test> SELECT * FROM protected;
[]

// When guest access is denied
$ surreal start --deny-guests

test/test> CREATE public;
There was a problem with the database: There was a problem with the database: IAM error: Not enough permissions to perform this action

test/test> SELECT * FROM public;
There was a problem with the database: There was a problem with the database: IAM error: Not enough permissions to perform this action

test/test> CREATE protected;
There was a problem with the database: There was a problem with the database: IAM error: Not enough permissions to perform this action

test/test> SELECT * FROM protected;
There was a problem with the database: There was a problem with the database: IAM error: Not enough permissions to perform this action
