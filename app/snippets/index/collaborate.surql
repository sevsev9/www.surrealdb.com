-- Subscribe to all changes to documents which match
LIVE SELECT * FROM document
	WHERE
		account = $auth.account
		OR public = true
;

-- Subscribe to all changes to a single 'post' record
LIVE SELECT * FROM post:c569rth77ad48tc6s3ig;

-- Stop receiving change notifications
KILL "1986cc4e-340a-467d-9290-de81583267a2";
