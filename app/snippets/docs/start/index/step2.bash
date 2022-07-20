curl --request POST \
	--header 'Content-Type: application/json' \
	--header 'NS: test' \
	--header 'DB: test' \
	--user "root:root" \
	--data "INFO FOR DB" \
	http://localhost:8000/sql
