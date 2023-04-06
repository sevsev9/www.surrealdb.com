CREATE article SET
	created_at = time::now(),
	author = author:john,
	title = 'Lorem ipsum dolor',
	text = 'Donec eleifend, nunc vitae commodo accumsan, mauris est fringilla.',
	account = (SELECT VALUE id FROM account WHERE name = 'ACME Inc' LIMIT 1)[0]
;
