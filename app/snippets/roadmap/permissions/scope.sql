-- Enable scope authentication directly in SurrealDB
DEFINE SCOPE account SESSION 24h
	SIGNUP AS (CREATE user SET email=$email, pass=bcrypt.generate($pass))
	SIGNIN AS (SELECT * FROM user WHERE email=$email AND bcrypt.compare(pass, $pass))
;

-- Enable authentication using a 3rd party provider
DEFINE TOKEN auth0 ON SCOPE account TYPE HS512 VALUE "-----BEGIN PUBLIC KEY----- MIGfMA0G...";
