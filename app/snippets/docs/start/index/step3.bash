DATA="CREATE account SET
	name = 'ACME Inc',
	created_at = time::now();"
curl -k -L -s --compressed POST \
	--header "Content-Type: application/json" \
	--header "NS: test" \
	--header "DB: test" \
	--user "root:root" \
	--data "${DATA}" \
	http://localhost:8000/sql
